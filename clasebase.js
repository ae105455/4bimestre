"use strict";
class Estudiante {
    nombre;
    sexo;
    constructor(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }
    describir() {
        return `${this.nombre} es de sexo ${this.sexo}.`;
    }
}
class EstudianteJuan extends Estudiante {
    constructor() {
        super("Juan", "Masculino");
    }
    mostrarProfesion() {
        return `${this.nombre} estudia Contabilidad.`;
    }
}
class EstudianteCamila extends Estudiante {
    constructor() {
        super("Camila", "Femenino");
    }
    mostrarProfesion() {
        return `${this.nombre} estudia Administración.`;
    }
}
const listaEstudiantes = [
    new EstudianteJuan(),
    new EstudianteCamila()
];
listaEstudiantes.forEach(estudiante => {
    console.log(estudiante.describir());
    console.log(estudiante.mostrarProfesion());
});
