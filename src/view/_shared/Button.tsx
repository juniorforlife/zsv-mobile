import { Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  label: string;
  fontSize?: number;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  style,
  label,
  fontSize,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={[styles.text, { fontSize }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.main,
    borderRadius: 8,
    marginTop: 16,
    padding: 12,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Button