const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular Pacote", () => {
  test("Um projeto de 104h deve retornar pacote_premium", () => {
    const horasDeProjeto = 104;

    expect(calcularPacote(horasDeProjeto)).toBe(0);
  });

  test("Projeto de 50h deve retornar pacote básico", () => {
    const horasDeProjeto = 50;

    expect(calcularPacote(horasDeProjeto)).toBe("pacote_basico");
  });
});
