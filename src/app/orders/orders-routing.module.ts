import {RouterModule, Routes} from '@angular/router';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {NgModule} from '@angular/core';
import {OrdersListComponent} from './orders/orders-list.component';

const routes: Routes = [
  {path: '', component: OrdersListComponent},
  {path: ':id', component: OrderDetailsComponent, children: [
      {path: 'back', redirectTo: '/customers'}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule {
  static components = [OrderDetailsComponent, OrdersListComponent];
}
