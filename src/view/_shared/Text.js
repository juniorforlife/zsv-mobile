import React from 'react';
import {Text as RNText, StyleSheet, TextProps} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: '#202325',
  },
});

const Text = ({style, children, color}) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

export default Text;
