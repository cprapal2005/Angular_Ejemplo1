import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeListComponent } from './componentes/joke-list/joke-list.component';
import { JokeComponent } from './componentes/joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
