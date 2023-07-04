import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lighterGrey,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 30,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    marginBottom: 10,
  },
  detailContainer: {
    paddingVertical: 20,
  },
  detailMessage: {
    fontSize: 18,
    color: COLORS.black,
  },
  selectedItem: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.bold,
    marginTop: 10,
    paddingVertical: 10,
    textAlign: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '70%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
