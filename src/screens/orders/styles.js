import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
  },
  sectionContainer: {
    maxHeight: '50%',
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
