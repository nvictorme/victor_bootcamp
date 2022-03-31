const { sumaObjetivo } = require("../solucion");

describe("sumaObjetivo", () => {
  it("retorna un array con [-1, 11]", () => {
    const arr = [3, 5, -4, 8, 11, 1, -1, 6];
    const objetivo = 10;
    const result = sumaObjetivo(arr, objetivo);
    expect(result.length).toBe(2);
    expect(result.includes(-1)).toBeTruthy();
    expect(result.includes(11)).toBeTruthy();
  });
  it("retorna un array con [6, -3]", () => {
    const arr = [4, 6, 1, -3];
    const objetivo = 3;
    const result = sumaObjetivo(arr, objetivo);
    expect(result.length).toBe(2);
    expect(result.includes(-3)).toBeTruthy();
    expect(result.includes(6)).toBeTruthy();
  });
  it("retorna un array vacio con input [14] y objetivo 15", () => {
    const arr = [14];
    const objetivo = 15;
    const result = sumaObjetivo(arr, objetivo);
    expect(result.length).toBe(0);
  });
  it("retorna un array vacio", () => {
    const arr = [3, 5, -4, 8, 11, 1, -1, 6];
    const objetivo = 15;
    const result = sumaObjetivo(arr, objetivo);
    expect(result.length).toBe(0);
  });
});
