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
const jefe = {
    nombre: "Susana",
    sueldo: 1000,
    equipo: ['Juan', 'Rosa']
};
const stock = {
    "CPU-01": 15,
    "MON-05": 40
};
console.log(jefe);
console.log(stock);
export {};
//# sourceMappingURL=ts1210.js.map