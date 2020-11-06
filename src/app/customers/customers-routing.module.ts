import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomersDetailsComponent} from './customers-details/customers-details.component';

const routes: Routes = [
  {path: '', component: CustomersListComponent,
  children: [
    {path: ':id', component: CustomersDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomersRoutingModule{
  static components = [CustomersListComponent];
}

