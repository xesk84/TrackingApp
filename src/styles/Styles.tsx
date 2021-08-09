import {Dimensions, StyleSheet} from 'react-native';

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
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    flex: 1,
  },
  deliveryListItem: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    flex: 1,
    paddingVertical: 10,
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  deliveryItemData: {
    flex: 3,
  },
  deliveryItemButtonContainer: {
    flex: 1.5,
  },
  itemDataRow: {
    width: 250,
    flexDirection: 'row',
  },
  itemDataTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  deliverButton: {
    width: 100,
    height: 60,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  activeDeliveryRow: {
    flexDirection: 'row',
  },
  activeDeliveryDataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeDeliveryDataValue: {
    fontSize: 18,
  },
  activeDeliverButtonsContainer: {
    flexDirection: 'row',
  },
  errorText: {
    color: 'red',
  },
});
