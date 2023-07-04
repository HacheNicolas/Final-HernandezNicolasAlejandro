import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 3,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 10,
  },
  text: {
    marginHorizontal: 10,
    textAlign: 'center',
  },
});
