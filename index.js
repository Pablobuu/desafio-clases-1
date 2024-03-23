import { Cliente } from "./clases/class-cliente.js";
import { Impuestos } from "./clases/class-impuestos.js";

const impuestoCliente = new Impuestos(500000, 25000);

const cliente01 = new Cliente("Pablo Burgos", impuestoCliente);

const impuestoAnual = cliente01.calcularImpuesto();
console.log(`El impuesto anual para ${cliente01.nombre} es: ${impuestoAnual}`);
