import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  addContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    width: '95%',
    justifyContent: 'center',
  },
  inputContainerWide: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 5,
    width: '81%',
  },
  inputWide: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  input: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    width: '49%',
  },
  buttonContainer: {
    padding: 4,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.lighterGrey,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
