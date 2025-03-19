import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  standalone: false,
})
export class LoginPage {
  texto: string = '';

  constructor() { }

  alertAction() {
    alert('Data sent!')
  }

}
