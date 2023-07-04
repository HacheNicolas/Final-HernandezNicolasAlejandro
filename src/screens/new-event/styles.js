import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    margin: 20,
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
    paddingBottom: 5,
    fontSize: 22,
    fontFamily: FONTS.medium,
  },
  input: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
  },
});
