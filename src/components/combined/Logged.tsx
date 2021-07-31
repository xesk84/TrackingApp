import React from 'react';
import {Text} from 'react-native';
import {Styles} from '../../styles/Styles';
import {Button} from '../basic/Button';
import {Section} from '../basic/Section';

type Props = {
  driverId: string;
  onLogout: () => void;
};

export const Logged = ({driverId, onLogout}: Props) => {
  return (
    <>
      <Section sectionStyle={Styles.verticalSectionSeparator}>
        <Text style={Styles.subtitle}>{`Hi driver ${driverId}`}</Text>
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
