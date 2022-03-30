const { sumaObjetivo } = require("../solucion");

describe("sumaObjetivo", () => {
  it("retorna un array con 2 enteros", () => {
    const arr = [3, 5, -4, 8, 11, 1, -1, 6];
    const objetivo = 10;
    const result = sumaObjetivo(arr, objetivo);
    expect(result.includes(-1)).toBeTruthy();
    expect(result.includes(11)).toBeTruthy();
  });
});
