const {
  horasPorProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calcular horas de projeto", () => {
  test("Se a lista contendo 3 funcionalidades terá 24 horas", () => {
    const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"];

    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24);
  });
});
