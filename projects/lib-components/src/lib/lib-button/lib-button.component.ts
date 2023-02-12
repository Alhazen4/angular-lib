import { Component, Input  } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: `./lib-button.component.html`,
  styleUrls: ['./lib-button.component.scss']
})

export class LibButtonComponent {
  @Input() variant: string = 'primary';
  @Input() isDisabled: boolean = false;

  ngOnChanges() {
    if (this.variant === 'disabled' || this.variant === 'disabled-outline') {
      this.isDisabled = !this.isDisabled;
    }
  }


}
