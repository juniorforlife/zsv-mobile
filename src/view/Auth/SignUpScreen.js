import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput} from '../_shared';

export default function SignUpScreen() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChangeUsername = (text) => {
    setUsername(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const handleSignUp = () => {};

  return (
    <View style={styles.container}>
      <TextInput
        label={'Username'}
        placeholder="Username"
        value={username}
        onChangeText={handleChangeUsername}
      />
      <TextInput
        label={'Password'}
        placeholder="Password"
        value={password}
        onChangeText={handleChangePassword}
      />
      <Button onPress={handleSignUp} label="Create account" fontSize={18} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  error: {
    color: 'red',
  },
});
