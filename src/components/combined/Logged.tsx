import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {ActiveDelivery} from '../../redux/deliveries/entitites/DeliveryEntity';
import {Styles} from '../../styles/Styles';
import {Button} from '../basic/Button';
import {Section} from '../basic/Section';
import {CurrentActiveDelivery} from './CurrentActiveDelivery';

type Props = {
  driverId: string;
  onLogout: () => void;
  navigation: NavigationProp<any>;
  activeDelivery: ActiveDelivery;
  onDelivered: () => void;
  onUndelivered: () => void;
};

export const Logged = ({
  driverId,
  onLogout,
  navigation,
  activeDelivery,
  onDelivered,
  onUndelivered,
}: Props) => {
  const goToDeliveriesList = () => {
    navigation.navigate('DeliveriesList');
  };
  return (
    <>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Text style={Styles.subtitle}>{`Hi driver ${driverId}`}</Text>
      </Section>
      {!activeDelivery.id ? (
        <>
          <Section sectionStyle={Styles.verticalSectionSeparator}>
            <Button
              buttonStyle={Styles.smallButton}
              buttonText="Deliveries"
              onPress={goToDeliveriesList}
              textStyle={Styles.buttonTextStyle}
            />
          </Section>

          <Section sectionStyle={Styles.bottomAbsoluteSection}>
            <Button
              buttonStyle={Styles.reverseSmallButton}
              buttonText="Logout"
              onPress={onLogout}
              textStyle={Styles.reverseButtonTextStyle}
            />
          </Section>
        </>
      ) : (
        <Section sectionStyle={Styles.verticalSectionSeparator}>
          <CurrentActiveDelivery
            activeDelivery={activeDelivery}
            onDelivered={onDelivered}
            onUndelivered={onUndelivered}
          />
        </Section>
      )}
    </>
  );
};
