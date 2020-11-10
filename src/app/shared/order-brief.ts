import {OrderStatus} from './order-status';

export interface OrderBrief {
  id: number;
  customerId: number;
  customerName: string;
  date: string;
  totalInvoiced: number;
  status: OrderStatus;
}
