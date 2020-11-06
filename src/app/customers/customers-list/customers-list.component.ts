import { Component, OnInit } from '@angular/core';
import { Customer} from '../../shared/customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers: Customer[] = [];

  constructor() {
    this.customers = [];
    this.customers.push(
      { id: 1, name: 'Joe', age: 21, telephone: '0123456'},
      { id: 2, name: 'Lauren', age: 65, telephone: '01268764'},
      { id: 3, name: 'Mia', age: 38, telephone: '0687623452'},
      { id: 4, name: 'Stephan', age: 50, telephone: '065855652'},
    );
  }

  ngOnInit(): void {
  }

}
