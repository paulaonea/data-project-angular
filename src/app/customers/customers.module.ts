import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import {CustomersRoutingModule} from './customers-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CustomersComponent } from './customers/customers.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { RemoveCustomerComponent } from './remove-customer/remove-customer.component';

@NgModule({
  declarations: [CustomersListComponent, CustomersDetailsComponent, CustomersRoutingModule.components, CustomersComponent, NewCustomerComponent, RemoveCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ]
})

export class CustomersModule { }

