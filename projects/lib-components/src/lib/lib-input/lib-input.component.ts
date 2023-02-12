import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-input',
  templateUrl: `./lib-input.component.html`,
  styleUrls: ['./lib-input.component.scss'],
})
export class LibInputComponent {
  @Input() inputType: string = '';
  @Input() variant: string = '';

  ngOnChanges() {
    if (this.inputType ==='number') {

    }
  }
}
