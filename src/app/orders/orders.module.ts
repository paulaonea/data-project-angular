import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersListComponent } from './orders/orders-list.component';
import {OrdersRoutingModule} from './orders-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [OrderDetailsComponent, OrdersListComponent, OrdersRoutingModule.components],
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
  ]
})
export class OrdersModule { }
