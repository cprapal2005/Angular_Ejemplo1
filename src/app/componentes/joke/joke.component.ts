import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../../clases/joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styles: [
  ]
})
export class JokeComponent {

  @Input('joke') public broma: Joke = new Joke("", "");
  @Output() bromaBorrada = new EventEmitter<Joke>();
  esconder: boolean = false;

  borrarBroma(pregunta: string, respuesta: string) {

    this.bromaBorrada.emit(new Joke(pregunta, respuesta));

  }

  editarBroma(joke: Joke) {

    this.broma.pregunta = joke.pregunta;
    this.broma.respuesta = joke.respuesta;

  }

  revertir() {

    this.esconder = !this.esconder;
    
  }

}
