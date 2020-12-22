import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';

const KeyboardAwareView = ({children}) => {
  const keyboardVerticalOffset = useHeaderHeight();
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      enabled
      behavior={'padding'}
      style={{flex: 1}}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default KeyboardAwareView;
