import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.lighterGrey,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: COLORS.primary,
    fontFamily: FONTS.bold,
    marginBottom: 5,
    justifyContent: 'center',
  },
  selectedItem: {
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.regular,
    marginTop: 5,
    padding: 5,
    textAlign: 'left',
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '70%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    height: '40%',
    minHeight: 220,
    width: '100%',
  },
  location: {
    marginTop: 20,
    marginHorizontal: 10,
    width: '95%',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
    borderRadius: 10,
  },
  locationContainer: {
    padding: 20,
  },
  locationText: {
    color: COLORS.primary,
    fontFamily: FONTS.medium,
    textAlign: 'center',
  },
  map: {
    height: 220,
  },
});
