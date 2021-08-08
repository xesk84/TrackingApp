import {
  mockedGetDeliveries,
  mockedPostDelivery,
} from '../../src/common/services/ApiService';
import {Delivery} from '../../src/redux/deliveries/entitites/DeliveryEntity';

const mockDelivery: Delivery = {
  id: 'C987',
  address: 'Av. Eduard Matistany',
  city: 'Badalona',
  zipCode: '08002',
  latitude: 8.242342,
  longitude: 43.345345,
  customer: 'Mireia Belmonte',
};

test('call mockedGetDeliveries and receive values', async () => {
  const testResult = await mockedGetDeliveries('/deliveries');
  expect(testResult).not.toBeUndefined();
});

test('call mockedGetDeliveries and receive error', async () => {
  mockedGetDeliveries('invalidMethod').catch(e =>
    expect(e.message).toEqual('Invalid method'),
  );
});

test('call mockedPostDelivery and finish without errors', async () => {
  try {
    await mockedPostDelivery('/finishDelivery', mockDelivery, 'delivered');
    expect(true).toBeTruthy();
  } catch {
    // should not come here
  }
});

test('call mockedPostDelivery and finish with errors', async () => {
  try {
    await mockedPostDelivery('/fakeMethod', mockDelivery, 'delivered');
    //will never execute this
    expect(false).toBeTruthy();
  } catch (e) {
    expect(e.message).toEqual('Invalid method');
  }
});
