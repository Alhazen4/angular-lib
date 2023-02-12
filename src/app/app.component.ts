import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lib-project';
  toastActive: boolean = false;
  display: string = 'none';

  activateToast() {
    if (!this.toastActive) {
      this.display = 'none';
      this.toastActive = true;
    } else {
      this.display = 'block';
      this.toastActive = false;
    }
  }

  func() {
    console.log('Active');
  }
}
