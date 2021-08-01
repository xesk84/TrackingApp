import {StatusEnum} from '../../../common/enums/StatusEnum';

export type Delivery = {
  id: string;
  address: string;
  city: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  customer: string;
};

export type Deliveries = {
  deliveries: Array<Delivery>;
  status: StatusEnum;
  error: string;
};

export type DeliveryFinish = {
  delivery: Delivery;
  deliveryStatus: 'delivered' | 'undelivered';
};
