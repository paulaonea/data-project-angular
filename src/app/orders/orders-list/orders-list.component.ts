import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Order} from '../../shared/order';
import {OrderBrief} from '../../shared/order-brief';
import {OrderStatus} from '../../shared/order-status';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-orders',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements AfterViewInit {
  dataSource: MatTableDataSource<OrderBrief>;
  displayedColumns: string[] = ['id', 'customerName', 'date', 'totalInvoiced', 'status'];
  order: OrderBrief[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    this.order = [
      { id: 323, customerId: 1, customerName: 'Joe', date: '2016', status: OrderStatus.Delivered, totalInvoiced: 28.3},
      {id: 325, customerId: 1, customerName: 'Joe', date: '2020', status: OrderStatus.Active, totalInvoiced: 14.5},
      {id: 327, customerId: 2, customerName: 'Lauren', date: '2016', status: OrderStatus.Returned, totalInvoiced: 150.5},
      {id: 253, customerId: 3, customerName: 'Mia', date: '2018', status: OrderStatus.Delivered, totalInvoiced: 56.3},
      {id: 125, customerId: 3, customerName: 'Mia', date: '2019', status: OrderStatus.PartlyReturned, totalInvoiced: 128.23},
    ];
    this.dataSource = new MatTableDataSource<OrderBrief>(this.order);
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
