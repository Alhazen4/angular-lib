import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'lib-expand',
  templateUrl: './lib-expand.component.html',
  styleUrls: ['./lib-expand.component.scss'],
  imports: [MatIconModule]
})
export class LibExpandComponent {
  @Input() headerTitle: string = 'Title';
  classBody: string = 'expand-body';
  classHeader: string = 'expand-header';
  isActive: boolean = false;

  openExpand() {
    if (!this.isActive) {
      this.classBody = 'expand-body-active';
      this.classHeader = 'expand-header-active';
      this.isActive = true;
    } else {
      this.classBody = 'expand-body';
      this.classHeader = 'expand-header';
      this.isActive = false;
    }
  }
}
