class Animal {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    hablar() {
        return `${this.nombre} hacer un sonido`;
    }
}
class Perro extends Animal {
    hablar() {
        return `${this.nombre} dice !gua gua!`;
    }
}
class Gato extends Animal {
    hablar() {
        return `${this.nombre} dice !Mia Mia!`;
    }
}
const animales = [new Perro("coco"), new Gato('Misi')];
animales.forEach(a => console.log(a.hablar()));
export {};
//# sourceMappingURL=clases.js.map