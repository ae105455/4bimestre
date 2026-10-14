abstract class Animal {
    constructor( protected nombre: String){}
    hablar(): string{
        return `${this.nombre} hacer un sonido`;

    }

    
}

class  Perro  extends Animal {
    hablar (): string{
        return `${this.nombre} dice !gua gua!`;
    }
}

class  Gato   extends Animal {
    hablar (): string{
        return `${this.nombre} dice !Mia Mia!`;
    }
}

const animales  :Animal[]=[new  Perro ("coco"), new Gato ('Misi')];
animales.forEach(a=>console.log(a.hablar()));

