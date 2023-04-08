interface IOperacionMatematica {
    calcular(): number;
    establecerOperando1(valor: number): void;
    establecerOperando2(valor: number): void;
  }
  
  interface ISuma extends IOperacionMatematica {
    // Esta interfaz hereda los métodos de IOperacionMatematica
  }
  
  interface IResta extends IOperacionMatematica {
    // Esta interfaz hereda los métodos de IOperacionMatematica
  }
  
  interface IMultiplicacion extends IOperacionMatematica {
    // Esta interfaz hereda los métodos de IOperacionMatematica
  }
  
  interface IDivision extends IOperacionMatematica {
    // Esta interfaz hereda los métodos de IOperacionMatematica
    //establecerDenominador(valor: number): void;
  }


class Suma implements ISuma {
    private operando1: number;
    private operando2: number;
    
    constructor() {
        this.operando1 = 0;
        this.operando2 = 0;
    }
    
    calcular() {
      return this.operando1 + this.operando2;
    }
    
    establecerOperando1(valor: number) {
      this.operando1 = valor;
    }
    
    establecerOperando2(valor: number) {
      this.operando2 = valor;
    }
  }
  
  class Resta implements IResta {
    private operando1: number;
    private operando2: number;
    
    constructor() {
        this.operando1 = 0;
        this.operando2 = 0;
    }
    
    calcular() {
        return this.operando1 - this.operando2;
      }
      
      establecerOperando1(valor: number) {
        this.operando1 = valor;
      }
      
      establecerOperando2(valor: number) {
        this.operando2 = valor;
      }
    }
    class Multiplicacion implements IMultiplicacion {
        private operando1: number;
        private operando2: number;
        
        constructor() {    
            this.operando1 = 0;
            this.operando2 = 0;
        }
        
        calcular() {
          return this.operando1 * this.operando2;
        }
        
        establecerOperando1(valor: number) {
          this.operando1 = valor;
        }
        
        establecerOperando2(valor: number) {
          this.operando2 = valor;
        }
      }
      
      class Division implements IDivision {
        private operando1: number;
        private operando2: number;
        //private denominador: number = 0;
        
        constructor() {    
            this.operando1 = 0;
            this.operando2 = 0;
            //this.denominador = 0;
        }
        
        calcular() {
          return this.operando1 / this.operando2//(this.operando1 / this.operando2) * this.denominador;
        }
        
        establecerOperando1(valor: number) {
          this.operando1 = valor;
        }
        
        establecerOperando2(valor: number) {
          this.operando2 = valor;
        }
        
        // establecerDenominador(valor: number) {
        //   this.denominador = valor;
        // }
      }

const suma = new Suma();
suma.establecerOperando1(5);
suma.establecerOperando2(3);
console.log(`La suma es: ${suma.calcular()}`);

const resta = new Resta();
resta.establecerOperando1(8);
resta.establecerOperando1(4);
console.log(`La resta es: ${resta.calcular()}`);


const multiplicacion = new Multiplicacion();
multiplicacion.establecerOperando1(5);
multiplicacion.establecerOperando2(3);
console.log(`La multiplicacion es: ${multiplicacion.calcular()}`);


const division = new Division();
division.establecerOperando1(67);
division.establecerOperando2(3);
//division.establecerDenominador(1);
console.log(`La division es: ${division.calcular()}`);


