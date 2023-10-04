export class JokeComponent {

  public pregunta: string;
  public respuesta: string;
  public esconder: boolean;

  constructor(pregunta: string, respuesta: string) {

    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.esconder = true;

  }

  toggle() {

    this.esconder = !this.esconder;
    
  }

}
