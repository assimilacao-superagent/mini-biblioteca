# mini-biblioteca

Mini-biblioteca de cálculos comerciais. **Regra da casa: todo o dinheiro é
guardado e calculado em centimos inteiros** — nada de euros com casas decimais
dentro das funções.

## Funções

De `src/dinheiro.js`:

- `somar(a, b)` — soma dois valores em centimos.
- `subtrair(a, b)` — subtrai dois valores em centimos.
- `multiplicar(preco, quantidade)` — preço unitário × quantidade.
- `aplicarDesconto(preco, percentagem)` — preço com desconto aplicado.
- `dividirEmParcelas(total, n)` — divide um total em `n` parcelas.

De `src/formatos.js`:

- `formatarCentimos(centimos)` — 1234 → `"12,34"`.

## Testes

```sh
npm test
```

Usa o corredor de testes do próprio Node (`node --test`), sem dependências.

<!-- PROVA DE MERGE (Critico B, 2026-11-04): linha de prova sem efeito funcional. -->
<!-- PROVA DE MERGE volta 2 (Critico B, 2026-11-04): segunda linha de prova sem efeito funcional. -->
