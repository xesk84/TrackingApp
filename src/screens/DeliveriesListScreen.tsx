import React, {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatListProps} from 'react-native';
import {View, Text, SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../components';
import {Delivery} from '../redux/deliveries/entitites/DeliveryEntity';
import {getDeliveries} from '../redux/deliveries/services/DeliveryServices';
import {RootState} from '../redux/RootReducer';
import {Styles} from '../styles/Styles';

type Props = {};

export const DeliveriesListScreen = (props: Props) => {
  const dispatch = useDispatch();
  const {deliveries, status, error} = useSelector(
    (state: RootState) => state.deliveries,
  );
  useEffect(() => {
    dispatch(getDeliveries());
  }, [dispatch]);

  console.log('Deliveries', deliveries);
  console.log('status', status);
  console.log('error', error);

  const keyExtractor = (item: Delivery, index: number) => {
    return `${item.id}-${index}`;
  };

  const renderItem = ({item}: ListRenderItemInfo<Delivery>) => {
    return (
      <View style={Styles.deliveryListItem}>
        <View style={Styles.deliveryItemData}>
          <View style={Styles.itemDataRow}>
            <Text style={Styles.itemDataTitle}>Customer:</Text>
            <Text>{item.customer}</Text>
          </View>
          <View style={Styles.itemDataRow}>
            <Text style={Styles.itemDataTitle}>City:</Text>
            <Text>{item.city}</Text>
          </View>
          <View style={Styles.itemDataRow}>
            <Text style={Styles.itemDataTitle}>Address:</Text>
            <Text>{item.address}</Text>
          </View>
        </View>
        <View style={Styles.deliveryItemButtonContainer}>
          <Button
            buttonStyle={Styles.deliverButton}
            buttonText="Deliver"
            onPress={() => console.log('mactivo')}
            textStyle={Styles.buttonTextStyle}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.centerContent}>
        <FlatList
          keyExtractor={keyExtractor}
          data={deliveries}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};
