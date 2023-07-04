import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: COLORS.white,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.black,
    fontFamily: FONTS.regular,
  },
});
