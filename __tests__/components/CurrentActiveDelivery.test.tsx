import React from 'react';
import {CurrentActiveDelivery} from '../../src/components';
import {ActiveDelivery} from '../../src/redux/deliveries/entitites/DeliveryEntity';
import renderer from 'react-test-renderer';
import {StatusEnum} from '../../src/common/enums/StatusEnum';
import {fireEvent, render} from '@testing-library/react-native';

test('renders active delivery correctly', () => {
  const activeDelivery: ActiveDelivery = {
    id: 'C987',
    address: 'Av. Eduard Matistany',
    city: 'Badalona',
    zipCode: '08002',
    latitude: 8.242342,
    longitude: 43.345345,
    customer: 'Mireia Belmonte',
    status: StatusEnum.Ready,
    error: '',
  };
  const mockOnDelivered = jest.fn();
  const mockOnUndelivered = jest.fn();

  renderer.create(
    <CurrentActiveDelivery
      activeDelivery={activeDelivery}
      onDelivered={mockOnDelivered}
      onUndelivered={mockOnUndelivered}
    />,
  );
});

test('executes deliver and undeliver actions correctly', () => {
  const testId = 'cadTestId';
  const deliverButtonTestId = 'deliverButtonTestId';
  const undeliverButtonTestId = 'undeliverButtonTestId';
  const activeDelivery: ActiveDelivery = {
    id: 'C987',
    address: 'Av. Eduard Matistany',
    city: 'Badalona',
    zipCode: '08002',
    latitude: 8.242342,
    longitude: 43.345345,
    customer: 'Mireia Belmonte',
    status: StatusEnum.Ready,
    error: '',
  };
  const mockOnDelivered = jest.fn();
  const mockOnUndelivered = jest.fn();

  const {getAllByTestId} = render(
    <CurrentActiveDelivery
      activeDelivery={activeDelivery}
      onDelivered={mockOnDelivered}
      onUndelivered={mockOnUndelivered}
      testID={testId}
      deliverTestId={deliverButtonTestId}
      undeliverTestId={undeliverButtonTestId}
    />,
  );

  const buttonDeliver = getAllByTestId(deliverButtonTestId);
  const buttonUndeliver = getAllByTestId(undeliverButtonTestId);
  expect(mockOnDelivered).not.toBeCalled();
  expect(mockOnUndelivered).not.toBeCalled();
  fireEvent.press(buttonDeliver[0]);
  expect(mockOnDelivered).toBeCalled();
  expect(mockOnDelivered).toBeCalledTimes(1);
  fireEvent.press(buttonUndeliver[0]);
  expect(mockOnUndelivered).toBeCalled();
  expect(mockOnUndelivered).toBeCalledTimes(1);
});
