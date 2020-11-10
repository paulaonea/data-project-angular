import {OrderItem} from './order-item';
import {OrderStatus} from './order-status';

export interface Order {
  id: number;
  customerId: number;
  date: string;
  status: OrderStatus;
  orderItems: OrderItem[];
}
