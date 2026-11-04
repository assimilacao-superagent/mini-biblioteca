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

test("aplicarDesconto de 10% em valor redondo", () => {
  assert.equal(aplicarDesconto(10000, 10), 9000);
});

test("dividirEmParcelas com divisao exacta", () => {
  assert.deepEqual(dividirEmParcelas(9000, 3), [3000, 3000, 3000]);
});

test("formatarCentimos de um valor comum", () => {
  assert.equal(formatarCentimos(1234), "12,34");
});
