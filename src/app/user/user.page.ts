import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss'],
  standalone: false,
})
export class UserPage {

  constructor() {}

  newButton() {
    alert('Criar usuario maluco')
  }
  changeButton() {
    alert('Alterar usuario maluco')
  }
  saveButton(){
    alert('Salvar usuario maluco')
  }

}
