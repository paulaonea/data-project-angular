import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CustomersDetailsComponent} from './customers-details/customers-details.component';
import {CustomersListComponent} from './customers-list/customers-list.component';

const routes: Routes = [
  {path: '', component: CustomersListComponent},
  {path: ':id', component: CustomersDetailsComponent, children: [
      {path: 'back', redirectTo: '/customers'},
      {path: 'orders/:id', redirectTo: '/orders/:id'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomersRoutingModule{
  static components = [CustomersListComponent];
}

