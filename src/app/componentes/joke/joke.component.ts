import { Component } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styles: [
  ]
})
export class JokeComponent {

  public setup: string;
  public punchline: string;
  public hide: boolean;
  constructor(setup: string, punchline: string) {
  this.setup = setup;
  this.punchline = punchline;
  this.hide = true;
  }
  toggle() {
  this.hide = !this.hide;
  //Prueba Git
  //Segunda Prueba de Git
  }


}
