// Cálculos com dinheiro. Regra da casa: tudo em centimos inteiros.
function isFiniteInteger(x) {
  return Number.isFinite(x) && Number.isInteger(x);
}

export function somar(a, b) {
  if (!isFiniteInteger(a)) throw new TypeError(`Primeiro argumento inválido: ${a}`);
  if (!isFiniteInteger(b)) throw new TypeError(`Segundo argumento inválido: ${b}`);
  return a + b;
}

export function subtrair(a, b) {
  if (!isFiniteInteger(a)) throw new TypeError(`Primeiro argumento inválido: ${a}`);
  if (!isFiniteInteger(b)) throw new TypeError(`Segundo argumento inválido: ${b}`);
  return a - b;
}

export function multiplicar(preco, quantidade) {
  return preco * quantidade;
}

// Devolve o preço com o desconto aplicado.
export function aplicarDesconto(preco, percentagem) {
  // Calcula o desconto e arredonda metade para cima para um inteiro de cêntimos
  const desconto = preco * (percentagem / 100);
  const resto = preco - desconto;
  // Arredonda metade para cima (Math.round) para um inteiro de cêntimos
  return Math.round(resto);
}

// Divide um total em N parcelas.
export function dividirEmParcelas(total, n) {
  const base = Math.floor(total / n);
  return Array.from({ length: n }, () => base);
}
