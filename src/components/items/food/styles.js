import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../constants';

export const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: COLORS.darkGrey,
    borderRadius: 10,
    marginVertical: 3,
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 40,
    alignItems: 'center',
  },
  name: { width: '50%', alignItems: 'flex-start' },
  quantity: { width: '20%', alignItems: 'center' },
  expiration: { width: '30%', alignItems: 'flex-end' },
  title: { color: COLORS.white, fontSize: 16, fontFamily: FONTS.bold },
});
