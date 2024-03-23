export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuestos = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }
  calcularImpuesto() {
    const montoBrutoAnual = this._impuestos.montoBrutoAnual;
    const deducciones = this._impuestos.deducciones;

    const impuesto = (montoBrutoAnual - deducciones) * 0.21;

    return impuesto;
  }
}
