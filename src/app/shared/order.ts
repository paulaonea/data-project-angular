import {OrderItem} from './order-item';

export interface Order {
  id: number;
  customerId: number;
  date: string;
  orderItems: OrderItem[];
}
