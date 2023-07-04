import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: '70%',
    padding: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    color: COLORS.black,
  },
});
