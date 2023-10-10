import { Injectable } from '@angular/core';
import { Joke } from '../clases/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

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

  eliminarBroma(joke: Joke) {

    this.jokes.forEach((element, index) => {

      if(joke.respuesta===element.respuesta && joke.pregunta===element.pregunta) this.jokes.splice(index, 1);
        
    });

  }

}
