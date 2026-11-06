// Formata centimos para texto, ex.: 1234 -> "12,34"
// Suporta números inteiros de cêntimos com sinal, parte inteira e dois dígitos decimais
export function formatarCentimos(centimos) {
  const negativo = centimos < 0;
  const abs = Math.abs(centimos);
  const parteInteira = Math.floor(abs / 100);
  const parteDecimal = abs % 100;
  const sinal = negativo ? "-" : "";
  return sinal + parteInteira + "," + (parteDecimal < 10 ? "0" : "") + parteDecimal;
}
