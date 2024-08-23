import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  passwordControl = new FormControl('');

  constructor() {
    this.passwordControl.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.passwordControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
