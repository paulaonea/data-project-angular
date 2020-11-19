import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CustomersDetailsComponent} from './customers-details/customers-details.component';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomersComponent} from './customers/customers.component';
import {NewCustomerComponent} from './new-customer/new-customer.component';
import {RemoveCustomerComponent} from './remove-customer/remove-customer.component';

const routes: Routes = [
  {path: '', component: CustomersComponent, children: [
      {path: 'list', component: CustomersListComponent},
      {path: 'new', component: NewCustomerComponent},
      {path: 'remove', component: RemoveCustomerComponent},
      {path: ':id', component: CustomersDetailsComponent},
      {path: '/orders/:id', redirectTo: '/orders/:id'},
      ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomersRoutingModule{
  static components = [CustomersListComponent, ];
}

