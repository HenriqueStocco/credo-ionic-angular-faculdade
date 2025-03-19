import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss'],
  standalone: false,
})
export class RegisterPage {

  constructor() {
  }
  alertAction() {
    alert('User registered!')
  }

}
