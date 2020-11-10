import {OrderItem} from './order-item';

export interface OrderDetails {
  id: number;
  customerId: number;
  customerName: string;
  date: string;
  totalInvoiced: number;
  orderItems: OrderItem[];
}
