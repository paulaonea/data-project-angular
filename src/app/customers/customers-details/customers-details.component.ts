import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CustomerDetails} from '../../shared/customer-details';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Order} from '../../shared/order';

function computeOrderValue(order: Order): string {
  let orderValue: number;
  orderValue = 0;
  for (const orderItem of order.orderItems){
    orderValue += (orderItem.quantity * orderItem.price);
  }
  return orderValue.toFixed(2);
}

function computeOrdersBrief(ordersDetails: Order[]): any {
  let ordersToPrint: any[];
  ordersToPrint = [];
  for (const order of ordersDetails){
    ordersToPrint.push({
       id: order.id,
       date: order.date,
       totalValue: computeOrderValue(order),
     });
  }
  return ordersToPrint;
}

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss']
})
export class CustomersDetailsComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Order>;
  displayedColumns: string[] = ['id', 'date', 'totalValue'];
  customer: CustomerDetails;
  orders: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.customer = {
      details: {id: 1, name: 'Joe', age: 21, tel: '0123456'},
      orders: {
        totalNumberOfOrders: 2,
        ordersDetails: [
          { id: 323, customerId: 1, date: '2016', orderItems: [
              { productId: 123, name: 'ABC', price: 14.2, quantity: 3},
              { productId: 123, name: 'AB', price: 3.2, quantity: 2},
            ]},
          {id: 325, customerId: 1, date: '2020', orderItems: [
              { productId: 123, name: 'ABC', price: 14.2, quantity: 2},
              { productId: 86, name: 'DE', price: 34.5, quantity: 1},
            ]}
            ]
      }
    };
    this.orders = computeOrdersBrief(this.customer.orders.ordersDetails);
    this.dataSource = new MatTableDataSource(this.orders);
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
