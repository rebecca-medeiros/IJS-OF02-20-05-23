const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Calcular valor por hora", () => {
  test("Salário mínimo de 1300 reais", () => {
    expect(calcularValorPorHora(1300)).toBe(8);
  });

  test("", () => {});
});
