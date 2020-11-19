import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: [, { validators: [Validators.required] }],
      email: [, {validators: [Validators.required, Validators.email]}],
      password: [, { validators: [Validators.required] }],
      phone: [, {validators: [Validators.pattern('^[0-9]*$'), Validators.required ]}],
      age: [, { validators: [Validators.required, Validators.max(105), Validators.min(15)] }],
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  submitForm() {
  }
}
