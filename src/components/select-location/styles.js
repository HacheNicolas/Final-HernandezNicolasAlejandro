import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  preview: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 10,
  },
  actions: {
    paddingVertical: 10,
  },
});
