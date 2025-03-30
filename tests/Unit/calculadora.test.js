const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deveria retorna 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retorna 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("multiplicar 2 * 5 deveria retorna 10", () => {
  const resultado = calculadora.multiplicar(2, 5);
  expect(resultado).toBe(10);
});

test("multiplicar 5 * 100 deveria retorna 500", () => {
  const resultado = calculadora.multiplicar(5, 100);
  expect(resultado).toBe(500);
});

test("dividir 100 / 2 deveria retorna 50", () => {
  const resultado = calculadora.dividir(100, 2);
  expect(resultado).toBe(50);
});

test("multiplicar 9 * 3 deveria retorna 3", () => {
  const resultado = calculadora.dividir(9, 3);
  expect(resultado).toBe(3);
});
