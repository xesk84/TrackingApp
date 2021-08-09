import React from 'react';
import {Text, View} from 'react-native';
import {ActiveDelivery} from '../../redux/deliveries/entitites/DeliveryEntity';
import {Styles} from '../../styles/Styles';
import {Button} from '../basic/Button';
import {Section} from '../basic/Section';
import {CurrentActiveDelivery} from './CurrentActiveDelivery';

type Props = {
  driverId: string;
  onLogout: () => void;
  activeDelivery: ActiveDelivery;
  onDelivered: () => void;
  onUndelivered: () => void;
  onGoToDeliveriesList: () => void;
  componentTestId?: string;
  deliverButtonTestId?: string;
  undeliverButtonTestId?: string;
  logoutButtonTestId?: string;
  deliveriesListButtonTestId?: string;
};

export const Logged = ({
  driverId,
  onLogout,
  activeDelivery,
  onDelivered,
  onUndelivered,
  onGoToDeliveriesList,
  componentTestId,
  deliverButtonTestId,
  undeliverButtonTestId,
  logoutButtonTestId,
  deliveriesListButtonTestId,
}: Props) => {
  return (
    <View style={Styles.mainContainer} testID={componentTestId}>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Text style={Styles.subtitle}>{`Hi driver ${driverId}`}</Text>
      </Section>
      {!activeDelivery.id ? (
        <>
          <Section sectionStyle={Styles.verticalSectionSeparator}>
            <Button
              buttonStyle={Styles.smallButton}
              buttonText="Deliveries"
              onPress={onGoToDeliveriesList}
              textStyle={Styles.buttonTextStyle}
              testID={deliveriesListButtonTestId}
            />
          </Section>

          <Section sectionStyle={Styles.bottomAbsoluteSection}>
            <Button
              buttonStyle={Styles.reverseSmallButton}
              buttonText="Logout"
              onPress={onLogout}
              textStyle={Styles.reverseButtonTextStyle}
              testID={logoutButtonTestId}
            />
          </Section>
        </>
      ) : (
        <Section sectionStyle={Styles.verticalSectionSeparator}>
          <CurrentActiveDelivery
            activeDelivery={activeDelivery}
            onDelivered={onDelivered}
            onUndelivered={onUndelivered}
            deliverTestId={deliverButtonTestId}
            undeliverTestId={undeliverButtonTestId}
          />
        </Section>
      )}
    </View>
  );
};
