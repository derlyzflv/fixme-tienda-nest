
import { EstadoPedido } from '../../generated/prisma/enums.js';

export interface LineaPedido {
  productoId: number;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
}

/** Calcula precio por cantidad. */
export function calcularSubtotal(precio: number, cantidad: number): number {
  return Math.round(precio * cantidad * 100) / 100;
}

/** Suma los subtotales de todas las líneas. */
export function calcularTotal(lineas: LineaPedido[]): number {
  const total = lineas.reduce((acc, linea) => acc + linea.subtotal, 0);
  return Math.round(total * 100) / 100;
}

const TRANSICIONES: Record<EstadoPedido, EstadoPedido[]> = {
  PENDIENTE: [EstadoPedido.PAGADO, EstadoPedido.CANCELADO],
  PAGADO: [EstadoPedido.ENVIADO, EstadoPedido.CANCELADO],
  ENVIADO: [],
  CANCELADO: [],
};

/** Verifica si se permite cambiar de estado. */
export function puedeCambiarEstado(
  actual: EstadoPedido,
  nuevo: EstadoPedido,
): boolean {
  return TRANSICIONES[actual].includes(nuevo);
}
