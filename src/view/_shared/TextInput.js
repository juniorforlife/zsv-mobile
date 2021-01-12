import React from 'react';
import { View, TextInput as RNTextInput, StyleSheet, Text } from 'react-native';

import { COLORS } from '../../constants';

const TextInput = (props) => {
  const {
    label,
    name,
    onChangeText,
    error,
    containerStyle,
    style,
    ...otherProps
  } = props;

  function handleChangeText(text) {
    onChangeText(text, name);
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        {...otherProps}
        style={[styles.input, style]}
        autoCapitalize={'none'}
        onChangeText={handleChangeText}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#c3c3c3',
    padding: 8,
  },
  error: {
    fontSize: 14,
    color: COLORS.error,
    marginTop: 12,
  },
});

export default TextInput;
