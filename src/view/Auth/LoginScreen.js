import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, TextInput, Text } from '../_shared';
import { COLORS } from '../../constants';
import { useForm } from '../../hooks';
import { authActions } from '../../state/';

function LoginScreen(props) {
  const { login } = props;

  const { formValues, onChangeInputValue } = useForm({
    email: null,
    password: null,
  });
  const [loginErr, setLoginErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      const { email, password } = formValues;
      setIsLoading(true);
      await login(email, password);
    } catch (e) {
      setLoginErr('Email or password is not correct');
      setIsLoading(false);
    }
  };

  const { email, password } = formValues;

  return (
    <View style={styles.container}>
      <TextInput
        name={'email'}
        placeholder="Email"
        value={email}
        onChangeText={onChangeInputValue}
      />
      <TextInput
        name={'password'}
        placeholder="Password"
        value={password}
        onChangeText={onChangeInputValue}
        secureTextEntry
      />
      {!!loginErr && <Text style={styles.error}>{loginErr}</Text>}
      <Button onPress={handleLogin} label="Login" fontSize={18} />
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupTxt}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
// const mapDispatch = (dispatch) => {
//   return {
//     login: (username, password) =>
//       dispatch(authActions.login(username, password)),
//   };
// };

export default connect(null, { login: authActions.login })(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  error: {
    color: 'red',
  },
  signupBtn: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  signupTxt: {
    color: COLORS.main,
  },
});
