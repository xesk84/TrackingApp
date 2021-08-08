import React from 'react';
import {Logged} from '../../src/components';
import renderer from 'react-test-renderer';
import {StatusEnum} from '../../src/common/enums/StatusEnum';
import {fireEvent, render} from '@testing-library/react-native';
import {ActiveDelivery} from '../../src/redux/deliveries/entitites/DeliveryEntity';

const onDelivered = jest.fn();
const onUndelivered = jest.fn();
const goToDeliveryList = jest.fn();
const onLogout = jest.fn();

const emptyDriverId = '';
const driverId = '1234dsf';
const deliverButtonTestId = 'deliverButtonTestId';
const undeliverButtonTestId = 'undeliverButtonTestId';
const logoutButtonTestId = 'logoutButtonTestId';
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
const emptyActiveDelivery: ActiveDelivery = {
  id: '',
  address: '',
  city: '',
  zipCode: '',
  latitude: 0,
  longitude: 0,
  customer: '0',
  status: StatusEnum.NotInformed,
  error: '',
};

test('renders logged correctly', () => {
  renderer.create(
    <Logged
      driverId={emptyDriverId}
      onLogout={onLogout}
      activeDelivery={activeDelivery}
      onDelivered={onDelivered}
      onUndelivered={onUndelivered}
      onGoToDeliveriesList={goToDeliveryList}
    />,
  );
});

test('executes deliver and undeliver actions correctly', () => {
  const {getAllByTestId} = render(
    <Logged
      driverId={driverId}
      onLogout={onLogout}
      activeDelivery={activeDelivery}
      onDelivered={onDelivered}
      onUndelivered={onUndelivered}
      onGoToDeliveriesList={goToDeliveryList}
      deliverButtonTestId={deliverButtonTestId}
      undeliverButtonTestId={undeliverButtonTestId}
    />,
  );

  const buttonDelivery = getAllByTestId(deliverButtonTestId);
  const buttonUndelivery = getAllByTestId(undeliverButtonTestId);
  expect(onDelivered).not.toBeCalled();
  expect(onUndelivered).not.toBeCalled();
  fireEvent.press(buttonDelivery[0]);
  expect(onDelivered).toBeCalled();
  expect(onDelivered).toBeCalledTimes(1);
  fireEvent.press(buttonUndelivery[0]);
  expect(onUndelivered).toBeCalled();
  expect(onUndelivered).toBeCalledTimes(1);
});

test('executes logout correctly when driverId is informed and activeDelivery is empty', () => {
  const {getAllByTestId} = render(
    <Logged
      driverId={driverId}
      onLogout={onLogout}
      activeDelivery={emptyActiveDelivery}
      onDelivered={onDelivered}
      onUndelivered={onUndelivered}
      onGoToDeliveriesList={goToDeliveryList}
      logoutButtonTestId={logoutButtonTestId}
    />,
  );
  const logoutButton = getAllByTestId(logoutButtonTestId);
  expect(onLogout).not.toBeCalled();

  fireEvent.press(logoutButton[0]);
  expect(onLogout).toBeCalled();
});

test('executes go to deliveries correctly when driverId is informed and activeDelivery is empty', () => {
  const {getAllByTestId} = render(
    <Logged
      driverId={driverId}
      onLogout={onLogout}
      activeDelivery={emptyActiveDelivery}
      onDelivered={onDelivered}
      onUndelivered={onUndelivered}
      onGoToDeliveriesList={goToDeliveryList}
      deliveriesListButtonTestId={deliverButtonTestId}
    />,
  );
  const deliverButton = getAllByTestId(deliverButtonTestId);
  expect(goToDeliveryList).not.toBeCalled();

  fireEvent.press(deliverButton[0]);
  expect(goToDeliveryList).toBeCalled();
});

test('delivery and undelivery buttons not rendered when activeDelivery is empty', () => {
  const {queryAllByTestId} = render(
    <Logged
      driverId={driverId}
      onLogout={onLogout}
      activeDelivery={emptyActiveDelivery}
      onDelivered={onDelivered}
      onUndelivered={onUndelivered}
      onGoToDeliveriesList={goToDeliveryList}
    />,
  );
  const buttonDelivery = queryAllByTestId(deliverButtonTestId);
  const buttonUndelivery = queryAllByTestId(undeliverButtonTestId);

  expect(buttonDelivery[0]).toBeUndefined();
  expect(buttonUndelivery[0]).toBeUndefined();
});

test('go to list and logout buttons not rendered when activeDelivery is informed', () => {
  const {queryAllByTestId} = render(
    <Logged
      driverId={driverId}
      onLogout={onLogout}
      activeDelivery={activeDelivery}
      onDelivered={onDelivered}
      onUndelivered={onUndelivered}
      onGoToDeliveriesList={goToDeliveryList}
    />,
  );
  const logoutButton = queryAllByTestId(logoutButtonTestId);
  const deliveryButton = queryAllByTestId(deliverButtonTestId);

  expect(logoutButton[0]).toBeUndefined();
  expect(deliveryButton[0]).toBeUndefined();
});
