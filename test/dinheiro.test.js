import { test } from "node:test";
import assert from "node:assert/strict";
import {
  somar,
  subtrair,
  multiplicar,
  aplicarDesconto,
  dividirEmParcelas,
} from "../src/dinheiro.js";
import { formatarCentimos } from "../src/formatos.js";

test("somar dois valores em centimos", () => {
  assert.equal(somar(150, 250), 400);
});

test("subtrair dois valores em centimos", () => {
  assert.equal(subtrair(500, 175), 325);
});

test("multiplicar preco por quantidade", () => {
  assert.equal(multiplicar(999, 3), 2997);
});

test("aplicarDesconto de 10% em valor redondo (sem arredondamento)", () => {
  assert.equal(aplicarDesconto(10000, 10), 9000);
});

test("aplicarDesconto de 10% em 1999 com arredondamento metade para cima", () => {
  assert.equal(aplicarDesconto(1999, 10), 1799);
});

test("aplicarDesconto de 50% em 1015 com arredondamento metade para cima", () => {
  assert.equal(aplicarDesconto(1015, 50), 508);
});

test("aplicarDesconto de 10% em 10000 (sem arredondamento)", () => {
  assert.equal(aplicarDesconto(10000, 10), 9000);
});

test("aplicarDesconto sempre retorna número inteiro de cêntimos", () => {
  assert.equal(Number.isInteger(aplicarDesconto(1999, 10)), true);
  assert.equal(Number.isInteger(aplicarDesconto(1015, 50)), true);
  assert.equal(Number.isInteger(aplicarDesconto(10000, 10)), true);
});

test("dividirEmParcelas com divisao exacta", () => {
  assert.deepEqual(dividirEmParcelas(9000, 3), [3000, 3000, 3000]);
});

test("dividirEmParcelas(10000, 3) soma exactamente 10000", () => {
  const parcelas = dividirEmParcelas(10000, 3);
  const soma = parcelas.reduce((acc, val) => acc + val, 0);
  assert.equal(soma, 10000);
  const expected = [3334, 3333, 3333];
  assert.deepEqual(parcelas, expected);
});

test("dividirEmParcelas(100, 3) soma exactamente 100", () => {
  const parcelas = dividirEmParcelas(100, 3);
  const soma = parcelas.reduce((acc, val) => acc + val, 0);
  assert.equal(soma, 100);
});

test("dividirEmParcelas nao excede distribuicao equitativa", () => {
  const parcelas = dividirEmParcelas(100, 3);
  const soma = parcelas.reduce((acc, val) => acc + val, 0);
  assert.equal(soma, 100);
});

test("formatarCentimos de um valor comum", () => {
  assert.equal(formatarCentimos(1234), "12,34");
});
