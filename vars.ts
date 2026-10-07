/* console.log('Hola muchachoos'); */
//Tipos de  datos 
/* primitivos :String Number Boolean  UndeFinid  null */
//compuestos: objectos , array enum
/* Def.Usuarios:class,interface,array  */
//string 
//comillas doblr
const strl: string = "cadena en comillas dobles";
const str2: string = "otra cadena en comillas dobles";

const nombre: string = "Ana";
const edad: number = 25;
const str3: string =  `Happy birthday ${edad} dear ${nombre}`;
console.log(str3);

//Numberos
//numeros enterosd
const num1: number =10;
const num2: number = 10.45;
const num3: number =2.5e3; //exponencail 2.5 *10 3 2500
const num4: number =3.7e-2; //exponecual 3.7 *10 -2 0.037
const num5: number =0xA; // hexadecimal  A = 10
const num6: number =0o12;  // octal 10
const num7: number =0b1010; // binario 1010

console.log(num7);

/* //boolean 
const bool1: boolean =true; */
let  bool1: boolean =true;
const bool2: boolean =false;

const conocesJavaScript: boolean = true;
if(conocesJavaScript) console.log('puedes seguir con TypeScript');
 else console.log('debes aprender javascript primero');
 //UNDEFINED
 let varUndefined: undefined;
 varUndefined = undefined;
 //null
 let varNull: null;
 varNull = null;
// definir un objeto
const empleado={
    nombre:"luz roja",
    estadoCivil:"casada",
    profeciones:['COntador','Auditora'],
    sueldo: 9500,
    bono:null,
    FinContrato:undefined
};
//nosabesmos que  obj son los objectos que se van acrear 
//array 
//array de  numeros
const numeros: number[]=[1,2,5,4];
//Array de  cadenas de texto
const cadenas: string[]=["ana","Rone","cecilia"];
//array de boolesanso 
const booleans: boolean[]=[true, false, true];
//emum tipos de numeros 
enum DiasSemana {Domingo,Lunes,Martes,Miercoles,Jueves,VIenes,Sabado}
enum colores {Rojo="#f00",Verde="#0f0", azul="#00f"}
//funciones  
function suma (a:number,b: any): number {
    return a + b;
}
console.log(suma(5,'a')); // cuando es  un trabajo grande  que tipo de  dato estoy haciendo  

console.log(suma(5,9));
//funciones  flecha

const dividir  =(a:number, b: number) => a / b; //si son varias centencias 
console.log(dividir(5,9));
//funcion con parametros opcionales 
function saludo(nombre: string, edad: number=20): string {
 return `Mi nombre es   ${nombre}, y tengo ${edad} años`;
}

console.log (saludo('juan',15));
/* let a : number | string ;
a= 5;
a= true; //error ya que no est permitido boolean
a= 'Carlos'; */
//class
class Empleado{
    nombre: String;
    constructor(nombre: String){
        this.nombre=nombre ;
    
    }
    saludar(){
        console.log('Hola , mi nombre es${this.nombre}');

    }
}
const nuevoEmpleado = new Empleado('Elsa Capunta');
 console.log(nuevoEmpleado.saludar());

 //INTERFACES 
 // NO TIENEN CODIGOS 
 //USAMOS  IMPLEMENTS
  interface Persona {
    nombre: String;
    edad: number;
  }
// INTERFACES CON PROPIEDADES OPCIONALES (?)
  interface Producto {
    nombre: String;
    precio: number;
descripcion : String ;
  }
  //INTERFACE PARA FUNCIONES 
  interface Comprador {
    (a: number, nombre: String) : boolean;
  }
  //INTERFACE PARA CLASES
  interface Vehiculo {
    marca:String ;
    velocidadActual:  number;
    acelerar(incremento: number) :void;

  }
  class Auto implements Vehiculo{
    marca: String;
    velocidadActual : number;
    constructor(marca:string){
     this.marca=marca;
     this.velocidadActual = 0;
        } 
    acelerar(incremento: number): void {
        this.velocidadActual += incremento;
        console.log(`El auto ${this.marca} va a  ${this.velocidadActual} km/h`);
    }
  }

  const  miAuto =new Auto('Suzuri');
  miAuto.acelerar(80);
  