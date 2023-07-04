import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../constants';

export const styles = StyleSheet.create({
  previewListContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.lighterGrey,
  },
  listContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.lighterGrey,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: FONTS.regular,
    fontSize: 20,
  },
});
