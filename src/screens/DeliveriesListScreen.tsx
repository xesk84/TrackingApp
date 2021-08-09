import {NavigationProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator, ListRenderItemInfo} from 'react-native';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StatusEnum} from '../common/enums/StatusEnum';
import {Button} from '../components';
import {Delivery} from '../redux/deliveries/entitites/DeliveryEntity';
import {setActiveDelivery} from '../redux/deliveries/services/ActiveDeliveryService';
import {getDeliveries} from '../redux/deliveries/services/DeliveryServices';
import {RootState} from '../redux/RootReducer';
import {Styles} from '../styles/Styles';

type Props = {
  navigation: NavigationProp<any>;
};

export const DeliveriesListScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {deliveries, status, error} = useSelector(
    (state: RootState) => state.deliveries,
  );
  useEffect(() => {
    dispatch(getDeliveries());
  }, [dispatch]);

  const keyExtractor = (item: Delivery, index: number) => {
    return `${item.id}-${index}`;
  };

  const setActive = (delivery: Delivery) => {
    dispatch(setActiveDelivery(delivery));
    navigation.goBack();
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
            <Text style={Styles.itemDataTitle}>ZipCode:</Text>
            <Text>{item.zipCode}</Text>
          </View>
          <View style={Styles.itemDataRow}>
            <Text style={Styles.itemDataTitle}>Address:</Text>
            <Text>{item.address}</Text>
          </View>
          <View style={Styles.itemDataRow}>
            <Text style={Styles.itemDataTitle}>Latitude:</Text>
            <Text>{item.latitude}</Text>
          </View>
          <View style={Styles.itemDataRow}>
            <Text style={Styles.itemDataTitle}>Longitude:</Text>
            <Text>{item.longitude}</Text>
          </View>
        </View>
        <View style={Styles.deliveryItemButtonContainer}>
          <Button
            buttonStyle={Styles.deliverButton}
            buttonText="Deliver"
            onPress={() => setActive(item)}
            textStyle={Styles.buttonTextStyle}
          />
        </View>
      </View>
    );
  };

  const renderListByStatus = (): JSX.Element => {
    if (status === StatusEnum.Error) {
      return (
        <Text
          style={
            Styles.errorText
          }>{`Error getting Deliveries ${error}. Try again later.`}</Text>
      );
    } else if (status === StatusEnum.Loading) {
      return <ActivityIndicator size={'large'} color={'black'} />;
    } else {
      return (
        <FlatList
          keyExtractor={keyExtractor}
          data={deliveries}
          renderItem={renderItem}
        />
      );
    }
  };

  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.centerContent}>{renderListByStatus()}</View>
    </SafeAreaView>
  );
};
