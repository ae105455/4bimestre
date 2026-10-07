/* console.log('Hola muchachoos'); */
//Tipos de  datos 
/* primitivos :String Number Boolean  UndeFinid  null */
//compuestos: objectos , array enum
/* Def.Usuarios:class,interface,array  */
//string 
//comillas doblr
const strl = "cadena en comillas dobles";
const str2 = "otra cadena en comillas dobles";
const nombre = "Ana";
const edad = 25;
const str3 = `Happy birthday ${edad} dear ${nombre}`;
console.log(str3);
//Numberos
//numeros enterosd
const num1 = 10;
const num2 = 10.45;
const num3 = 2.5e3; //exponencail 2.5 *10 3 2500
const num4 = 3.7e-2; //exponecual 3.7 *10 -2 0.037
const num5 = 0xA; // hexadecimal  A = 10
const num6 = 0o12; // octal 10
const num7 = 0b1010; // binario 1010
console.log(num7);
/* //boolean
const bool1: boolean =true; */
let bool1 = true;
const bool2 = false;
const conocesJavaScript = true;
if (conocesJavaScript)
    console.log('puedes seguir con TypeScript');
else
    console.log('debes aprender javascript primero');
//UNDEFINED
let varUndefined;
varUndefined = undefined;
//null
let varNull;
varNull = null;
// definir un objeto
const empleado = {
    nombre: "luz roja",
    estadoCivil: "casada",
    profeciones: ['COntador', 'Auditora'],
    sueldo: 9500,
    bono: null,
    FinContrato: undefined
};
//nosabesmos que  obj son los objectos que se van acrear 
//array 
//array de  numeros
const numeros = [1, 2, 5, 4];
//Array de  cadenas de texto
const cadenas = ["ana", "Rone", "cecilia"];
//array de boolesanso 
const booleans = [true, false, true];
//emum tipos de numeros 
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Domingo"] = 0] = "Domingo";
    DiasSemana[DiasSemana["Lunes"] = 1] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 2] = "Martes";
    DiasSemana[DiasSemana["Miercoles"] = 3] = "Miercoles";
    DiasSemana[DiasSemana["Jueves"] = 4] = "Jueves";
    DiasSemana[DiasSemana["VIenes"] = 5] = "VIenes";
    DiasSemana[DiasSemana["Sabado"] = 6] = "Sabado";
})(DiasSemana || (DiasSemana = {}));
var colores;
(function (colores) {
    colores["Rojo"] = "#f00";
    colores["Verde"] = "#0f0";
    colores["azul"] = "#00f";
})(colores || (colores = {}));
//funciones  
function suma(a, b) {
    return a + b;
}
console.log(suma(5, 'a')); // cuando es  un trabajo grande  que tipo de  dato estoy haciendo  
console.log(suma(5, 9));
//funciones  flecha
const dividir = (a, b) => a / b; //si son varias centencias 
console.log(dividir(5, 9));
//funcion con parametros opcionales 
function saludo(nombre, edad = 20) {
    return `Mi nombre es   ${nombre}, y tengo ${edad} años`;
}
console.log(saludo('juan', 15));
/* let a : number | string ;
a= 5;
a= true; //error ya que no est permitido boolean
a= 'Carlos'; */
//class
class Empleado {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log('Hola , mi nombre es${this.nombre}');
    }
}
const nuevoEmpleado = new Empleado('Elsa Capunta');
console.log(nuevoEmpleado.saludar());
class Auto {
    marca;
    velocidadActual;
    constructor(marca) {
        this.marca = marca;
        this.velocidadActual = 0;
    }
    acelerar(incremento) {
        this.velocidadActual += incremento;
        console.log(`El auto ${this.marca} va a  ${this.velocidadActual} km/h`);
    }
}
const miAuto = new Auto('Suzuri');
miAuto.acelerar(80);
export {};
//# sourceMappingURL=vars.js.map