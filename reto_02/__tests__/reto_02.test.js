const { validarSubserie } = require("../solucion");

describe("validarSubserie", () => {
  it("Test Case #1", function () {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, -1, 10];
    expect(validarSubserie(array, sequence)).toBe(true);
  });
  it("Test Case #2", function () {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [1, 6, 10];
    expect(validarSubserie(array, sequence)).toBe(true);
  });
  it("Test Case #3", function () {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [25];
    expect(validarSubserie(array, sequence)).toBe(true);
  });
  it("Test Case #4", function () {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 12];
    expect(validarSubserie(array, sequence)).toBe(false)
  });
  it("Test Case #5", function () {
    const array = [5, 1, 22, 25, 6, -1, 8, 10];
    const sequence = [4, 5, 1, 22, 25, 6, -1, 8, 10];
    expect(validarSubserie(array, sequence)).toBe(false);
  });
  it("Test Case #6", function () {
    const array = [1, 1, 6, 1];
    const sequence = [1, 1, 1, 6];
    expect(validarSubserie(array, sequence)).toBe(false);
  });
});
