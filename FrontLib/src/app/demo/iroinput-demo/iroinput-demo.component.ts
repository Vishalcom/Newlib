import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/* tslint:disable */

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* tslint:enable */

@Component({
  selector: 'app-iroinput-demo',
  templateUrl: './iroinput-demo.component.html',
  styleUrls: ['./iroinput-demo.component.scss']
})
export class IroinputDemoComponent implements OnInit {

   // --- iro inputbox
   input_1_placeholder = 'Enter Password';
   input_2_placeholder = 'First Name';
   input_3_placeholder = 'Email Id';
   input_1_required = false;
   input_2_required = true;
   input_1_type = 'password';
   input_2_type = 'text';
   input_3_type = 'email';
   input_1_modal = '';
   input_2_modal = 'Roger';
   input_3_modal = '';
   input_1_readOnly = false;
   input_2_readOnly = true;
 
   customFormControl = new FormControl('', [
     Validators.required,
     Validators.pattern(EMAIL_REGEX)
   ]);
 
   customFormControlData = {
     pattern: 'Please enter a valid email address',
     required: 'Email is Required'
   };
 
   constructor() { }
 
   ngOnInit() {
   }
 
 
 
 }
 