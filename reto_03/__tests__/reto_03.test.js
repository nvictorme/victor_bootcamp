const { cuadradosOrdenados } = require("../solucion");

describe("cuadradosOrdenados", () => {

  it("Test Case #1", function () {
    const result = cuadradosOrdenados([1, 2, 3, 4, 5, 6, 8, 9]);
    expect(result).toEqual([1, 4, 9, 16, 25, 36, 64, 81]);
  });

  it("Test Case #2", function () {
    const result = cuadradosOrdenados([1]);
    expect(result).toEqual([1]);
  });

  it("Test Case #3", function () {
    const result = cuadradosOrdenados([0]);
    expect(result).toEqual([0]);
  });

  it("Test Case #4", function () {
    const result = cuadradosOrdenados([0]);
    expect(result).toEqual([0]);
  });

  it("Test Case #5", function () {
    const result = cuadradosOrdenados([-2, -1]);
    expect(result).toEqual([1, 4]);
  });


  it("Test Case #6", function () {
    const result = cuadradosOrdenados([-10, -5, 0, 5, 10]);
    expect(result).toEqual([0, 25, 25, 100, 100]);
  });

  it("Test Case #7", function () {
    const result = cuadradosOrdenados([-3, -2, -1, 0, 1, 2]);
    expect(result).toEqual([0, 1, 1, 4, 4, 9]);
  });

});
