import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Button} from '../../src/components';
import {Styles} from '../../src/styles/Styles';

test('button triggers action', () => {
  const mockFn = jest.fn();
  const testId = 'buttonTest';

  const {getAllByTestId} = render(
    <Button
      buttonText="Button text"
      onPress={mockFn}
      buttonStyle={Styles.smallButton}
      textStyle={Styles.buttonTextStyle}
      testID={testId}
    />,
  );

  const buttonTest = getAllByTestId(testId);
  fireEvent.press(buttonTest[0]);
  expect(mockFn).toBeCalled();
  expect(mockFn).toHaveBeenCalledTimes(1);
});
