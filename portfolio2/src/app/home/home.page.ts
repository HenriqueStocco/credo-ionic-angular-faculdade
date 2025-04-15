import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  playerOne = ''
  playerChoiceTwo = ''
  options = ['scissor', 'paper', 'rock']
  counterPlayerOne = 0
  counterPlayerTwo = 0

  constructor() { }

  startTheGame() {
    this.playerChoiceTwo = this.options[Math.floor(Math.random() * this.options.length)]

    if (this.playerOne === this.playerChoiceTwo) {
      alert(`Ooh! Stalemate`);

      this.playerOne = '';
      this.playerChoiceTwo = '';

      return
    }
  }

  stoneButtonClicked() {
    return this.playerOne = 'rock'
  }
  paperButtonClicked() {
    return this.playerOne = 'paper'
  }
  scissorsButtonClicked() {
    return this.playerOne = 'scissor'
  }
}
