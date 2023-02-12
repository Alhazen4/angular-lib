import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-text',
  templateUrl: `./lib-text.component.html`,
  styleUrls: ['./lib-text.component.scss']
})
export class LibTextComponent {

  isText: boolean = false;
  isTitle: boolean = false;
  isNumber: boolean = false;
  isChip: boolean = false;
  isLabeled: boolean = false;

  @Input() variant: string = '';
  @Input() label: string = '';
  @Input() inputBgColor: string = '';

  ngOnInit() {
    if (this.variant === 'text') {
      this.isText = true;
    } else if (this.variant === 'title') {
      this.isTitle = true;
    } else if (this.variant === 'number') {
      this.isNumber = true;
    } else if (this.variant === 'chip') {
      this.isChip = true;
    }

    if (this.label !== '') {
      this.isLabeled = true;
    }
  }

}
