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

@NgModule({
  declarations: [CustomersListComponent, CustomersDetailsComponent, CustomersRoutingModule.components],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
  ]
})

export class CustomersModule { }

