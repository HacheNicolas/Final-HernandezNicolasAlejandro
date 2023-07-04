import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../../constants';

export const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
  },
  previewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: 90,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  orderType: {
    fontSize: 16,
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: COLORS.text,
  },
  detailContainer: {
    backgroundColor: COLORS.lighterGrey,
    borderRadius: 10,
    padding: 5,
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
    fontFamily: FONTS.regular,
    color: COLORS.text,
  },
  orderAccepted: { fontSize: 16, fontFamily: FONTS.medium, color: COLORS.primary },
  orderRejected: { fontSize: 16, fontFamily: FONTS.medium, color: COLORS.red },
  orderPending: { fontSize: 16, fontFamily: FONTS.medium, color: COLORS.yellow },
  manageOrder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    padding: 5,
  },
});
