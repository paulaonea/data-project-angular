import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';

@NgModule({
  declarations: [OrderDetailsComponent, OrdersListComponent, OrdersRoutingModule.components, OrdersComponent, AddOrdersComponent, UpdateOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class OrdersModule { }
