import {Customer} from './customer';
import {OrderBrief} from './order-brief';

export class CustomerDetails {
  details: Customer;
  orders: {
    totalNumberOfOrders: number;
    ordersDetails: OrderBrief[];
  };
}
