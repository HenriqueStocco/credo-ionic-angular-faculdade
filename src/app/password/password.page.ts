import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: 'password.page.html',
  styleUrls: ['password.page.scss'],
  standalone: false,
})
export class PasswordPage {
  texto: string = '';

  constructor() { }
  accessButton() {
    alert('Acesso liberado!');
  }
  registerButton() {
    alert('Cadastrar no bagulho!');
  }
}
