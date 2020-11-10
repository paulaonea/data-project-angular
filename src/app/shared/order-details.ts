import {OrderItem} from './order-item';
import {OrderStatus} from './order-status';

export interface OrderDetails {
  id: number;
  customerId: number;
  customerName: string;
  date: string;
  totalInvoiced: number;
  status: OrderStatus;
  orderItems: OrderItem[];
}
