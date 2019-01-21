// @flow
import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

const Button = ({ wrapperStyle, style, buttonsTextStyle, ...rest }) => (
  <View style={[styles.button, wrapperStyle]}>
    <Text style={[buttonsTextStyle, style]} {...rest} />
  </View>
);

Button.defaultProps = {
  buttonsTextStyle: {
    color: '#fd8524',
    fontWeight: 'bold',
  },
};

export default Button;
