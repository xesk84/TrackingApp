import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Input} from '../../src/components';
import {Styles} from '../../src/styles/Styles';

test('write on input', () => {
  const writedText = 'Driver12123';
  const testId = 'inputText';

  const mockFn = jest.fn();

  const {getAllByTestId} = render(
    <Input
      inputContainerStyle={Styles.inputContainer}
      textStyle={Styles.inputTextStyle}
      placeholder="Driver Id"
      onChangeText={mockFn}
      testID={testId}
    />,
  );
  const inputTest = getAllByTestId(testId);
  fireEvent.changeText(inputTest[0], writedText);
  expect(mockFn).toBeCalledWith(writedText);
});
