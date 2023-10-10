import { Component } from '@angular/core';
import { JokeService } from 'src/app/servicio/joke-service';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styles: [
  ]
})
export class JokeListComponent {

  jokeService: JokeService;

  constructor() {

    this.jokeService = new JokeService();

  }

}
