import {RouterModule, Routes} from '@angular/router';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {NgModule} from '@angular/core';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {OrdersModule} from './orders.module';
import {OrdersComponent} from './orders/orders.component';
import {AddOrdersComponent} from './add-orders/add-orders.component';
import {UpdateOrdersComponent} from './update-orders/update-orders.component';

const routes: Routes = [
  {path: '', component: OrdersComponent, children: [
      {path: 'list', component: OrdersListComponent},
      {path: 'add', component: AddOrdersComponent},
      {path: 'update', component: UpdateOrdersComponent},
      {path: ':id', component: OrderDetailsComponent}]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule {
  static components = [OrderDetailsComponent, OrdersListComponent, AddOrdersComponent, UpdateOrdersComponent];
}
