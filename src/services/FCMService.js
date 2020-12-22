import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';

export default class FCMService {
  getToken = (onGetTokenSuccess) => {
    messaging()
      .getToken()
      .then((fcmToken) => {
        if (fcmToken) {
          onGetTokenSuccess(fcmToken);
        } else {
          console.log('No token found');
        }
      })
      .catch((error) => {
        console.log('Get token rejected', error);
      });
  };

  init = (
    onGetTokenSuccess,
    onGetNotifInForeground,
    onGetNotifInBackground,
    onGetNotifInQuitState,
  ) => {
    /*---- check permission to send notification ----*/
    messaging()
      .hasPermission()
      .then((enabled) => {
        if (enabled) {
          this.getToken(onGetTokenSuccess);
        } else {
          messaging()
            .requestPermission()
            .then((authStatus) => {
              const _enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;

              if (_enabled) {
                this.getToken(onGetTokenSuccess);
              }
            });
        }
      });

    /*---- setup notification listener  ----*/
    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage) {
        const notif = remoteMessage.notification;
        onGetNotifInBackground(notif);
      }
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          const notif = remoteMessage.notification;
          onGetNotifInQuitState(notif);
        }
      });

    this.messageListener = messaging().onMessage(async (remoteMessage) => {
      if (remoteMessage) {
        const notif =
          Platform.OS === 'ios'
            ? remoteMessage.data.notification
            : remoteMessage.notification;
        onGetNotifInForeground(notif);
      }
    });

    messaging().onTokenRefresh((fcmToken) => onGetTokenSuccess(fcmToken));
  };

  registerAppWithFCM = () => {};

  removeListeners = () => {
    this.messageListener;
  };
}
