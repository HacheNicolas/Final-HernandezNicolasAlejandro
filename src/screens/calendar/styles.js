import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.black,
  },
  title: {
    color: COLORS.primary,
    paddingBottom: 20,
    fontSize: 34,
    fontFamily: FONTS.bold,
  },
});
