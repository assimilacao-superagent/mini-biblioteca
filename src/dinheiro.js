// Cálculos com dinheiro. Regra da casa: tudo em centimos inteiros.
export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}

export function multiplicar(preco, quantidade) {
  return preco * quantidade;
}

// Devolve o preço com o desconto aplicado.
export function aplicarDesconto(preco, percentagem) {
  return preco - preco * (percentagem / 100);
}

// Divide um total em N parcelas.
export function dividirEmParcelas(total, n) {
  const base = Math.floor(total / n);
  return Array.from({ length: n }, () => base);
}
