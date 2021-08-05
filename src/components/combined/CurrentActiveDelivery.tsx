import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button, Section} from '..';
import {StatusEnum} from '../../common/enums/StatusEnum';
import {ActiveDelivery} from '../../redux/deliveries/entitites/DeliveryEntity';
import {Styles} from '../../styles/Styles';

type Props = {
  activeDelivery: ActiveDelivery;
  onDelivered: () => void;
  onUndelivered: () => void;
};

export const CurrentActiveDelivery = ({
  activeDelivery,
  onDelivered,
  onUndelivered,
}: Props) => {
  return (
    <View>
      <View style={Styles.activeDeliveryRow}>
        <Text style={Styles.activeDeliveryDataTitle}>Deliver Id: </Text>
        <Text style={Styles.activeDeliveryDataValue}>{activeDelivery.id}</Text>
      </View>
      <View style={Styles.activeDeliveryRow}>
        <Text style={Styles.activeDeliveryDataTitle}>Customer: </Text>
        <Text style={Styles.activeDeliveryDataValue}>
          {activeDelivery.customer}
        </Text>
      </View>
      <View style={Styles.activeDeliveryRow}>
        <Text style={Styles.activeDeliveryDataTitle}>City: </Text>
        <Text style={Styles.activeDeliveryDataValue}>
          {activeDelivery.city}
        </Text>
      </View>
      <View style={Styles.activeDeliveryRow}>
        <Text style={Styles.activeDeliveryDataTitle}>Address: </Text>
        <Text style={Styles.activeDeliveryDataValue}>
          {activeDelivery.address}
        </Text>
      </View>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        {activeDelivery.status === StatusEnum.Loading ? (
          <ActivityIndicator size={'large'} color={'black'} />
        ) : (
          <View style={Styles.activeDeliverButtonsContainer}>
            <Button
              buttonStyle={Styles.smallButton}
              buttonText="Delivered"
              onPress={onDelivered}
              textStyle={Styles.buttonTextStyle}
            />
            <Button
              buttonStyle={Styles.reverseSmallButton}
              buttonText="Undelivered"
              onPress={onUndelivered}
              textStyle={Styles.reverseButtonTextStyle}
            />
          </View>
        )}
      </Section>
    </View>
  );
};