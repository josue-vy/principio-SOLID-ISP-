
interface IImpresion {
    imprimir(documento: string): boolean;
  }

interface IEscaneo {
    escanear(): string;
  } 

interface ICopia {
    copiar(): boolean;
  }
  

class Impresora implements IImpresion {
    imprimir(documento: string): boolean {
      return true;
    }
  }
  
class Escaner implements IEscaneo {
    escanear(): string {
      return "Imagen escaneada";
    }
  }
  
class Copiadora implements ICopia {
    copiar(): boolean {
      return true;
    }
  }
  
  // Clase que utiliza todas las interfaces para ofrecer funcionalidad completa de impresión
class Multifuncional implements IImpresion, IEscaneo, ICopia {
    private impresora: IImpresion;
    private escaner: IEscaneo;
    private copiadora: ICopia;
  
    constructor(impresora: IImpresion, escaner: IEscaneo, copiadora: ICopia) {
      this.impresora = impresora;
      this.escaner = escaner;
      this.copiadora = copiadora;
    }
  
    public imprimir(documento: string): boolean {
      return this.impresora.imprimir(documento);
    }
  
    public escanear(): string {
      return this.escaner.escanear();
    }
  
    public copiar(): boolean {
      return this.copiadora.copiar();
    }
  }
  

  const impresora = new Impresora();
  const escaner = new Escaner();
  const copiadora = new Copiadora();
  const multifuncional = new Multifuncional(impresora, escaner, copiadora);
  
  console.log(multifuncional.imprimir('Documento para imprimir'));
  console.log(multifuncional.escanear());
  console.log(multifuncional.copiar());