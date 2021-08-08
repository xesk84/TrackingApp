import React from 'react';
import {Login} from '../../src/components';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

const mockOnChangeDriverID = jest.fn();
const mockOnChangePassword = jest.fn();
const mockOnLogin = jest.fn();

const inputDriverIdTestId = 'inputDriverIdTestId';
const inputPasswordTestId = 'inputPasswordTestId';
const sectionTextErrorTestId = 'sectionTextErrorTestId';
const buttonLoginTestId = 'buttonLoginTestId';

test('renders login correctly', () => {
  renderer.create(
    <Login
      onChangeDriverId={mockOnChangeDriverID}
      onChangePassword={mockOnChangePassword}
      loginError={false}
      onLogin={mockOnLogin}
    />,
  );
});

test('execute onChangeDriverId when text is modified on input driverId', () => {
  const {getAllByTestId} = render(
    <Login
      onChangeDriverId={mockOnChangeDriverID}
      onChangePassword={mockOnChangePassword}
      loginError={false}
      onLogin={mockOnLogin}
      inputDriverIdTestId={inputDriverIdTestId}
    />,
  );

  const inputDriver = getAllByTestId(inputDriverIdTestId);

  fireEvent.changeText(inputDriver[0], 'drver123');
  expect(mockOnChangeDriverID).toBeCalledWith('drver123');
});

test('execute onPasswordChanges when text is modified on input Password', () => {
  const {getAllByTestId} = render(
    <Login
      onChangeDriverId={mockOnChangeDriverID}
      onChangePassword={mockOnChangePassword}
      loginError={false}
      onLogin={mockOnLogin}
      inputPasswordTestId={inputPasswordTestId}
    />,
  );

  const inputPassword = getAllByTestId(inputPasswordTestId);

  fireEvent.changeText(inputPassword[0], '123456');
  expect(mockOnChangePassword).toBeCalledWith('123456');
});

test('show login error when loginError is true', () => {
  const {queryAllByTestId} = render(
    <Login
      onChangeDriverId={mockOnChangeDriverID}
      onChangePassword={mockOnChangePassword}
      loginError={true}
      onLogin={mockOnLogin}
      sectionTextErrorTestId={sectionTextErrorTestId}
      buttonLoginTestId={buttonLoginTestId}
    />,
  );

  const sectionTestError = queryAllByTestId(sectionTextErrorTestId);

  expect(sectionTestError).not.toBeUndefined();
});

test('hide login error when loginError is true', () => {
  const {queryAllByTestId} = render(
    <Login
      onChangeDriverId={mockOnChangeDriverID}
      onChangePassword={mockOnChangePassword}
      loginError={false}
      onLogin={mockOnLogin}
      sectionTextErrorTestId={sectionTextErrorTestId}
      buttonLoginTestId={buttonLoginTestId}
    />,
  );

  const sectionTestError = queryAllByTestId(sectionTextErrorTestId);

  expect(sectionTestError[0]).toBeUndefined();
});

test('onLogin executed when button login pressed', () => {
  const {getAllByTestId} = render(
    <Login
      onChangeDriverId={mockOnChangeDriverID}
      onChangePassword={mockOnChangePassword}
      loginError={false}
      onLogin={mockOnLogin}
      sectionTextErrorTestId={sectionTextErrorTestId}
      buttonLoginTestId={buttonLoginTestId}
      inputDriverIdTestId={inputDriverIdTestId}
      inputPasswordTestId={inputPasswordTestId}
    />,
  );

  const buttonLogin = getAllByTestId(buttonLoginTestId);

  expect(mockOnLogin).not.toBeCalled();

  fireEvent.press(buttonLogin[0]);

  expect(mockOnLogin).toBeCalled();
});
