import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from '../../clases/joke';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styles: [
  ]
})
export class JokeFormComponent {

  @Output() bromaCreada = new EventEmitter<Joke>();

  createJoke(pregunta: string, respuesta: string) {

    this.bromaCreada.emit(new Joke(pregunta, respuesta));

  }

}
