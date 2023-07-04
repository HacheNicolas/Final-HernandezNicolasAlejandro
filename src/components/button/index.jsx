import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({ text, textStyle, buttonStyle, onPressButton, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle]}
      onPress={() => onPressButton()}
      disabled={disabled}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
