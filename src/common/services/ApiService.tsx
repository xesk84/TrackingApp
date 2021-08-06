import axios from 'axios';
import {Delivery} from '../../redux/deliveries/entitites/DeliveryEntity';

const BASE_API = 'https://60e84194673e350017c21844.xn--evg/api';

enum AxiosResult {
  Ok = 200,
}

type GetActions = '/deliveries';

type PostActions = '/driver' | '/finishDelivery';

/*
const type PostMethods = | '/deliveries';
  '/driver' = 'Driver',
  '/deliveries' = 'Deliveries',
  '/finishDelivery' = 'FinishDelivery',
}
*/

export const get = async <T,>(apiMethod: string): Promise<T> => {
  const result = await axios.get<T>(BASE_API + apiMethod);

  if (result.status === AxiosResult.Ok) {
    return result.data;
  } else {
    throw new Error(
      `Error code ${result.status} Message: ${result.statusText}`,
    );
  }
};

export const post = async <T,>(apiMethod: string, data: T): Promise<void> => {
  const result = await axios.post(BASE_API + apiMethod, data);

  if (result.status !== AxiosResult.Ok) {
    throw new Error(
      `Error code ${result.status} Message: ${result.statusText}`,
    );
  }
};

//get and post are the basic methods to get the data from the api
//for a good execution of the app for the test, I'll add this next
//methods that returns the desired mocked data.

export const mockedGetDeliveries = async (
  apiMethod: string,
): Promise<Array<Delivery>> => {
  if (apiMethod === '/deliveries') {
    return await getMockedDeliveries();
  }
  throw new Error('Invalid method');
};

export const mockedPostDriver = async (
  apiMethod: string,
  id: string,
  password: string,
): Promise<void> => {
  if (apiMethod === '/driver' && id && password) {
    await timeoutSimulatingApiCall();
  } else {
    throw new Error('Invalid method');
  }
};

export const mockedPostDelivery = async (
  apiMethod: string,
  delivery: Delivery,
  status: 'delivered' | 'undelivered',
): Promise<void> => {
  try {
    if (apiMethod === '/finishDelivery' && delivery && status) {
      await timeoutSimulatingApiCall();
    } else {
      throw new Error('Invalid method');
    }
  } catch (e) {
    throw new Error(`Error finishing delivery ${delivery.id}`);
  }
};

const timeoutSimulatingApiCall = () => {
  var promise = new Promise<void>(resolve => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
  return promise;
};

const getMockedDeliveries = (): Promise<Array<Delivery>> => {
  const promise = new Promise<Array<Delivery>>(resolve => {
    setTimeout(() => {
      resolve(mockedDeliveries);
    }, 1000);
  });
  return promise;
};

const mockedDeliveries: Array<Delivery> = [
  {
    id: 'A123',
    address: 'Pau Claris',
    city: 'Barcelona',
    zipCode: '08001',
    latitude: 1.231231231,
    longitude: 2.21312312,
    customer: 'Gerard Piqué',
  },
  {
    id: 'B456',
    address: 'Gran via',
    city: 'Barcelona',
    zipCode: '08002',
    latitude: 3.2342346,
    longitude: 6.667678904,
    customer: 'Laura Borràs',
  },
  {
    id: 'C987',
    address: 'Av. Eduard Matistany',
    city: 'Badalona',
    zipCode: '08002',
    latitude: 8.242342,
    longitude: 43.345345,
    customer: 'Mireia Belmonte',
  },
];
