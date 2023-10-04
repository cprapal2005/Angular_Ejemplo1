import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JokeListComponent } from './componentes/joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
