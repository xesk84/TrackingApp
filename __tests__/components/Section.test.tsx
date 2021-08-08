import 'react-native';
import React from 'react';
import {Section} from '../../src/components';
import {Styles} from '../../src/styles/Styles';
import {View} from 'react-native';
import renderer from 'react-test-renderer';

test('section is rendered', () => {
  const sectionChildren = <View />;

  renderer.create(
    <Section sectionStyle={Styles.verticalSectionSeparator}>
      {sectionChildren}
    </Section>,
  );
});
