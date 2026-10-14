
abstract class Estudiante {

  constructor(
    protected nombre: string, 
    protected sexo: string
  ) {}


  abstract mostrarProfesion(): string;


  describir(): string {
    return `${this.nombre} es de sexo ${this.sexo}.`;
  }
}


class EstudianteJuan extends Estudiante {
  constructor() {
    super("Juan", "Masculino"); 
  }

  mostrarProfesion(): string {
    return `${this.nombre} estudia Contabilidad.`;
  }
}

class EstudianteCamila extends Estudiante {
  constructor() {
    super("Camila", "Femenino");
  }
  mostrarProfesion(): string {
    return `${this.nombre} estudia Administración.`;
  }
}

const listaEstudiantes: Estudiante[] = [
  new EstudianteJuan(), 
  new EstudianteCamila()
];
listaEstudiantes.forEach(estudiante => {
  console.log(estudiante.describir());
  console.log(estudiante.mostrarProfesion());
 
});
