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
  gameState = false
  gameRound = 1
  intervalId: any = null
  waitingForPlayerChoice = false
  resultMessage = ''

  constructor() { }

  stoneButtonClicked() {
    this.playerOne = 'rock'
    if (this.waitingForPlayerChoice) {
      this.evaluateRound()
    }
  }

  paperButtonClicked() {
    this.playerOne = 'paper'
    if (this.waitingForPlayerChoice) {
      this.evaluateRound()
    }
  }

  scissorsButtonClicked() {
    this.playerOne = 'scissor'
    if (this.waitingForPlayerChoice) {
      this.evaluateRound()
    }
  }

  handlePlayerChoiceTwo() {
    return this.playerChoiceTwo = this.options[Math.floor(Math.random() * this.options.length)]
  }

  toogleGameState() {
    this.gameState = !this.gameState

    if (this.gameState) {
      this.startGame()
    } else {
      this.endGame()
    }
  }

  startGame() {
    // Reinicia o jogo
    this.counterPlayerOne = 0
    this.counterPlayerTwo = 0
    this.gameRound = 1
    this.playerOne = ''
    this.playerChoiceTwo = ''
    this.resultMessage = ''

    // Inicia a primeira rodada
    this.startNewRound()
  }

  startNewRound() {
    if (this.gameRound <= 10 && this.gameState) {
      this.waitingForPlayerChoice = true
      this.resultMessage = `Rodada ${this.gameRound} de 10. Faça sua escolha!`
    } else {
      this.finalizeGame()
    }
  }

  evaluateRound() {
    if (!this.gameState || !this.waitingForPlayerChoice) {
      return
    }

    this.waitingForPlayerChoice = false
    this.handlePlayerChoiceTwo() // Gera a escolha do computador

    // Agora a interface já mostrará as escolhas através do ngSwitch
    // Espera um tempo para o jogador visualizar as escolhas
    setTimeout(() => {
      const stalemate = this.playerOne === this.playerChoiceTwo
      const rockAndScissor = this.playerOne === 'rock' && this.playerChoiceTwo === 'scissor'
      const rockAndPaper = this.playerOne === 'rock' && this.playerChoiceTwo === 'paper'
      const paperAndScissor = this.playerOne === 'paper' && this.playerChoiceTwo === 'scissor'
      const paperAndRock = this.playerOne === 'paper' && this.playerChoiceTwo === 'rock'
      const scissorAndRock = this.playerOne === 'scissor' && this.playerChoiceTwo === 'rock'
      const scissorAndPaper = this.playerOne === 'scissor' && this.playerChoiceTwo === 'paper'

      // Avalia o resultado da rodada
      if (rockAndScissor) {
        alert('YOU WIN!')
        this.counterPlayerOne++
      } else if (rockAndPaper) {
        alert('AI WIN!')
        this.counterPlayerTwo++
      } else if (paperAndScissor) {
        alert('IA WIN!')
        this.counterPlayerTwo++
      } else if (paperAndRock) {
        alert('YOU WIN!')
        this.counterPlayerOne++
      } else if (scissorAndPaper) {
        alert('YOU WIN!')
        this.counterPlayerOne++
      } else if (scissorAndRock) {
        alert('IA WIN!')
        this.counterPlayerTwo++
      } else if (stalemate) {
        alert('Oohh! Stealmate')
        // Sem pontos para empate
      }

      // Incrementa a rodada após avaliar
      this.gameRound++

      // Avalia se o jogo deve continuar ou finalizar
      if (this.gameRound <= 10) {
        // Deixa as escolhas visíveis por um tempo antes de limpar
        setTimeout(() => {
          this.playerOne = ''
          this.playerChoiceTwo = ''
          this.startNewRound()
        }, 1500)
      } else {
        this.finalizeGame()
      }
    }, 800); // Tempo para o jogador ver as escolhas na interface
  }

  finalizeGame() {
    const playerOneGreaterThanTwo = this.counterPlayerOne > this.counterPlayerTwo
    const stealmatePoints = this.counterPlayerOne === this.counterPlayerTwo

    if (playerOneGreaterThanTwo) {
      alert('END GAME!\nYOU WIN!')
    } else if (stealmatePoints) {
      alert('END GAME!\nSTEALMATE!!')
    } else {
      alert('END GAME!\nIA WIN!')
    }

    this.showFinalResult()
    this.endGame()
  }

  showFinalResult() {
    if (this.counterPlayerOne > this.counterPlayerTwo) {
      console.log(`End game! YOU WIN ${this.counterPlayerOne} x ${this.counterPlayerTwo}`);
    } else if (this.counterPlayerTwo > this.counterPlayerOne) {
      console.log(`End game! IA WIN ${this.counterPlayerTwo} x ${this.counterPlayerOne}`);
    } else {
      console.log(`End game! Stealmate ${this.counterPlayerOne} x ${this.counterPlayerTwo}`);
    }
  }

  endGame() {
    this.gameState = false
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    // Limpa as escolhas ao finalizar o jogo
    this.playerOne = ''
    this.playerChoiceTwo = ''
  }

  ngOnDestroy() {
    this.endGame();
  }
}
