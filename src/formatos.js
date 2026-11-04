// Formata centimos para texto, ex.: 1234 -> "12,34"
export function formatarCentimos(centimos) {
  const s = String(centimos);
  return s.slice(0, -2) + "," + s.slice(-2);
}
