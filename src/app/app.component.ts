import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guerreros = ['Juan Carlos', 'Cayetano', 'Christian'];
  cont = 0;

  cambioGuerrero() {

    this.cont = Math.floor(Math.random() * this.guerreros.length);;

  }

}