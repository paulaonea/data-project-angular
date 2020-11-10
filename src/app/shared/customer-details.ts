import {Customer} from './customer';
import {Order} from './order';

export class CustomerDetails {
  details: Customer;
  orders: {
    totalNumberOfOrders: number;
    ordersDetails: Order[];
  };
}
