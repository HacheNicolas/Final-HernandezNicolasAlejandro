import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginVertical: 3,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  name: { width: '50%', alignItems: 'flex-start' },
  quantity: { width: '20%', alignItems: 'center' },
  expiration: { width: '30%', alignItems: 'flex-end' },
  item: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
