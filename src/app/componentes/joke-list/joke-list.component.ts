import { Component } from '@angular/core';
import { JokeComponent } from '../joke/joke.component'; 

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styles: [
  ]
})
export class JokeListComponent {

  jokes: JokeComponent[];

  constructor() {

    this.jokes = [
      new JokeComponent("¿Cual es el primo de Pocoyo?", "MuchoTu"),
      new JokeComponent("¿Cual es el nombre corto de Programacion Multimedia?", "Pomodoro")
    ];

  }

}
