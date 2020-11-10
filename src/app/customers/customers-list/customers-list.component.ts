import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { Customer} from '../../shared/customer';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements AfterViewInit {
  dataSource: MatTableDataSource<Customer>;
  displayedColumns: string[] = ['id', 'name', 'age', 'tel'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const customers: Customer[] = [
      { id: 1, name: 'Joe', age: 21, tel: '0123456'},
      { id: 2, name: 'Lauren', age: 65, tel: '01268764'},
      { id: 3, name: 'Mia', age: 38, tel: '0687623452'},
      { id: 4, name: 'Stephan', age: 50, tel: '065855652'},
      { id: 5, name: 'John', age: 42, tel: '065855652'},
      { id: 6, name: 'Chris', age: 18, tel: '065855652'},
      { id: 7, name: 'Ellie', age: 32, tel: '065855652'},
      { id: 8, name: 'Reneta', age: 34, tel: '065855652'},
      { id: 9, name: 'Mara', age: 48, tel: '065855652'},
      { id: 10, name: 'Alex', age: 25, tel: '065855652'},
      { id: 11, name: 'Will', age: 75, tel: '065855652'},
      { id: 12, name: 'Brandon', age: 25, tel: '065855652'}];
    this.dataSource = new MatTableDataSource(customers);
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

