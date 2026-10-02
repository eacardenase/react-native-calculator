import { StyleSheet } from 'react-native';

export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',
  textPrimary: '#FFFFFF',
  textSecondary: '#666666',
  background: '#000000',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  resultContainer: {
    flex: 3,
    paddingHorizontal: 30,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
  rowContainer: {
    flex: 6,
    justifyContent: 'flex-end',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 10,
  },
  button: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colors.darkGray,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.textPrimary,
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});
