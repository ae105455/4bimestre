/* class Persona {
    public titular : String;
    private saldo:number;
    protected numeroCuenta:String;
    constructor(titular:String,numero:number,numeroCuenta:String){
        this.titular = titular;
        this.saldo = numero;
        this.numeroCuenta = numeroCuenta;
    }
    depositar(monto:number):number{
        this.saldo += monto;
        return this.saldo;
    }
    consultarSaldo():number{
        return this.saldo; //scesibilidad dentro de la clase
    }
}

class CuentaBancaria extends Persona {}

const cuenta  = new CuentaBancaria("Elsa Pito",500,"CB*-0010");
cuenta.depositar(150);
console.log(cuenta.consultarSaldo()); // 650 */

// Error: saldo es private y solo puede accederse desde Persona.
// console.log(cuenta.saldo);
//----------------------------------------------------------------------
  /*   nombre:String;
    edad:number;
    constructor(nombre:String , edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar():String{{
        return 'Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.';
    }
}
}
 const persona = new Persona("juan",30);
 persona.saludar(); */

 //------------------------------------------------
 interface Empleado {
    nombre: String;
    sueldo: number;
    bono?: number; // propiedad opcional
 }
 interface Gerente extends Empleado{
    equipo:string[];

 }
 const jefe: Gerente = {
    nombre:"Susana",
    sueldo: 1000,
    equipo: ['Juan','Rosa']
 };
 // firma de indice  claces  dinamicos  de tipos  Streing , valor number
 interface inventario{
    [codigoProducto: string]:number

 }
 const  stock:inventario = {
    "CPU-01":15,
    "MON-05": 40

 };
 console.log(jefe);
 console.log(stock);