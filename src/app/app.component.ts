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

  buttonStatus: string = '';
  buttonOutStatus: string = '';

  inputText: string = 'Input Type Text';
  inputNumber: number = 12345;
  inputPassword: string = 'Pasword';

  ngOnInit() {
    document.body.style.margin = '0';
  }

  ngOnChange() {
    console.log(this.buttonVariant);
  }

  btnClick() {
    if (this.buttonStatus === '') {
      this.buttonStatus = 'Button Clicked!';
    } else {
      this.buttonStatus = '';
    }
  }

  btnOutClick() {
    if (this.buttonOutStatus === '') {
      this.buttonOutStatus = 'Button Outline Clicked!';
    } else {
      this.buttonOutStatus = '';
    }
  }
}
