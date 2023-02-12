import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: `./lib-input.component.html`,
  styleUrls: ['./lib-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LibInputComponent),
      multi: true
    }
  ]
})
export class LibInputComponent implements ControlValueAccessor {
  @Input() inputType: string = '';
  @Input() variant: string = '';

  private _value:string = '';

  get value() {
    return this._value;
  }

  set value(v:string) {
    this._value = v;
    this.onChange(v);
  }

  constructor() {}

  onChange(_: any) {}

  onTouch() {}

  // Allows Angular to update the model (rating).
  // Update the model and changes needed for the view here.
  writeValue(obj: any): void {
    this._value = obj;
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn : any) {
    this.onTouch = fn;
  }
}
