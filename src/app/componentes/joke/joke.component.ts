import { Component, Input } from '@angular/core';
import { Joke } from '../../clases/joke';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styles: [
  ]
})
export class JokeComponent {

  @Input('joke') public broma: Joke = new Joke("", "");

}
