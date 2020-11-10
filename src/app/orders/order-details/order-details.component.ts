import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {OrderItem} from '../../shared/order-item';
import {OrderDetails} from '../../shared/order-details';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements AfterViewInit{
  dataSource: MatTableDataSource<OrderItem>;
  displayedColumns: string[] = ['productId', 'name', 'price', 'quantity'];
  order: OrderDetails;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    this.order = {
      id: 323,
      customerId: 1,
      customerName: 'Joe',
      date: '2016',
      totalInvoiced: 48.8,
      orderItems: [
        { productId: 123, name: 'ABC', price: 14.2, quantity: 3},
        { productId: 123, name: 'AB', price: 3.2, quantity: 2},
        ]
      };
    this.dataSource = new MatTableDataSource<OrderItem>(this.order.orderItems);
    }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
