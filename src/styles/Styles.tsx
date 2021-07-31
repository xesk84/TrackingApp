import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  smallButton: {
    width: 150,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  reverseSmallButton: {
    width: 150,
    height: 60,
    backgroundColor: 'black',
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 18,
  },
  inputContainer: {
    width: 300,
    height: 50,
    borderColor: 'black',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
  },
  verticalSectionSeparator: {
    marginVertical: 10,
  },
  inputTextStyle: {
    fontSize: 20,
    width: 280,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reverseButtonTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomAbsoluteSection: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
