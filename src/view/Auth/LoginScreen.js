import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {Button, TextInput, Text} from '../components';
import {COLORS} from '../../constants';
import {useForm} from '../../hooks';
import authActions from '../../state/auth/authActions';

function LoginScreen(props) {
  const {navigation, login} = props;

  const {formValues, onChangeInputValue} = useForm({
    email: null,
    password: null,
  });
  const [loginErr, setLoginErr] = useState(null);

  const handleLogin = async () => {
    try {
      login(email, password);
    } catch (e) {
      console.log(e);
      setLoginErr('Email or password is not correct');
    }
  };

  const {email, password} = formValues;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={onChangeInputValue}
      />
      <TextInput
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

function mapDispatchToProps() {
  return {
    login: authActions.login,
  };
}

export default connect(null, mapDispatchToProps)(LoginScreen);

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
