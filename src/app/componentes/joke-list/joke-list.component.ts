import { Component } from '@angular/core';
import { Joke } from '../../clases/joke';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styles: [
  ]
})
export class JokeListComponent {

  jokes: Joke[];

  constructor() {

    this.jokes = [
      new Joke("¿Cual es el primo de Pocoyo?", "MuchoTu"),
      new Joke("¿Cual es el nombre corto de Programacion Multimedia?", "Pomodoro")
    ];

  }

  anadirBroma(joke: Joke) {
    this.jokes.unshift(joke);
    }
  

}
