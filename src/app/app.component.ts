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

  buttonVariant: string = 'success';
  buttonText: string = 'Text Button';

  ngOnInit() {
    document.body.style.margin = '0';
  }

  ngOnChange() {
    console.log(this.buttonVariant);
  }

  c(e: any) {
    console.log(e.target.value);
  }

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
