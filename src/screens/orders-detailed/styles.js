import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
  },
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
