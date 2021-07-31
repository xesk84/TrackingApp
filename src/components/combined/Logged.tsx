import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {Styles} from '../../styles/Styles';
import {Button} from '../basic/Button';
import {Section} from '../basic/Section';

type Props = {
  driverId: string;
  onLogout: () => void;
  navigation: NavigationProp<any>;
};

export const Logged = ({driverId, onLogout, navigation}: Props) => {
  const goToDeliveriesList = () => {
    navigation.navigate('DeliveriesList');
  };
  return (
    <>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Text style={Styles.subtitle}>{`Hi driver ${driverId}`}</Text>
      </Section>
      {/* TODO: DELIVERY ACTIVE */}
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
  );
};
