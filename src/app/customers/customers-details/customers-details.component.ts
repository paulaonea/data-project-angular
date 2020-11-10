import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CustomerDetails} from '../../shared/customer-details';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {OrderStatus} from '../../shared/order-status';
import {OrderBrief} from '../../shared/order-brief';


@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss']
})
export class CustomersDetailsComponent implements AfterViewInit {
  dataSource: MatTableDataSource<OrderBrief>;
  displayedColumns: string[] = ['id', 'status', 'date', 'totalInvoiced'];
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
          { id: 323, customerId: 1, customerName: 'Joe', date: '2016', status: OrderStatus.Delivered, totalInvoiced: 28.3},
          {id: 325, customerId: 1, customerName: 'Joe', date: '2020', status: OrderStatus.Active, totalInvoiced: 14.5}
            ]
      }
    };
    this.dataSource = new MatTableDataSource(this.customer.orders.ordersDetails);
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
