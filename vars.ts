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


