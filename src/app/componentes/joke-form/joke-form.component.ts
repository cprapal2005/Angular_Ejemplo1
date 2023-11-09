import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Joke } from '../../clases/joke';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styles: [
  ]
})
export class JokeFormComponent implements OnInit {

  @Output() bromaCreada = new EventEmitter<Joke>();
  jokeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  crearBroma(pregunta: string, respuesta: string) {

    this.bromaCreada.emit(new Joke(pregunta, respuesta));

  }
  
  ngOnInit() {
    this.jokeForm = this.formBuilder.group({
      pregunta: ['', [Validators.required, Validators.minLength(6)]],
      respuesta: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.jokeForm.valid) {
      this.crearBroma(this.jokeForm.value.pregunta, this.jokeForm.value.respuesta);
    }
  }

}
