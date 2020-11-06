import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import {CustomersRoutingModule} from './customers-routing.module';
import {Customer} from '../shared/customer';

@NgModule({
  declarations: [CustomersListComponent, CustomersDetailsComponent, CustomersRoutingModule.components],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})

export class CustomersModule { }

