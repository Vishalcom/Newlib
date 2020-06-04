import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/* tslint:disable */

// regex expressions

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/* tslint:enable */



@Component({
  selector: 'app-iro-inputbox',
  templateUrl: './iro-inputbox.component.html',
  styleUrls: ['./iro-inputbox.component.scss']
})
export class IroInputboxComponent implements OnInit {

  constructor() { }

  /********** checkbox component attributes **********/

  // --- 1-way data binding
  @Input() placeholder = 'test';
  @Input() isRequired = false;
  @Input() inputType = 'email';
  @Input() isReadOnly = false;
  @Input() name = '';

  // --- 2-way data binding
  inputVal = '';
  color = 'primary';

  // --- event emitters
  @Output() valueChange = new EventEmitter();
  @Output() colorChange = new EventEmitter<string>();
  @Output() inputChange = new EventEmitter();

  // --- control structure modal
  @Input()
  customFormControlData = {
    pattern: 'Please enter a valid details',
    required: ''
  };

  @Input()
  customFormControl = null;

  // --- inputbox value modal binding
  @Input()
  get value() {
    return this.inputVal;
  }

  set value(val) {
    this.inputVal = val;
    this.valueChange.emit(this.inputVal);
  }

  // --- inputbox color modal binding
  @Input()
  get colorCode() {
    return this.color;
  }

  set colorCode(val) {
    this.color = val;
    this.colorChange.emit(this.color);
  }

  ngOnInit() {
    if (this.customFormControl === null) {
      if (this.inputType.toLowerCase() === 'email') {
        // form-control validators
        if (this.isRequired) {
          this.customFormControl = new FormControl('', [
            Validators.required,
            Validators.pattern(EMAIL_REGEX)
          ]);
        } else {
          this.customFormControl = new FormControl('', [
            Validators.pattern(EMAIL_REGEX)
          ]);
        }

        // form-control data
        this.customFormControlData = {
          pattern: 'Please enter a valid email address',
          required: 'Email is Required'
        };
      } else {
        if (this.isRequired) {
          this.customFormControl = new FormControl('', [
            Validators.required
          ]);
        } else {
          this.customFormControl = new FormControl('', []);
        }

        // form-control data
        this.customFormControlData = {
          required: 'Please enter a valid details',
          pattern: ''
        };
      }
    }
  }

  onInput() {
    this.inputChange.emit(this.inputVal);
  }

}
