// aca puedes importar modulos o definir variables/helpers

/**
 * 
 * @param {number[]} arr - array de enteros en orden creciente
 * @return {number[]} array de cuadrados en orden creciente
 */
function cuadradosOrdenados(arr) {
  let res = [];
    for (let i=0; i<arr.length; i++){
      res.push(arr[i]**2);
    }
    res.sort(function(a, b) {
      return a - b;
    });
    return res;
}

  // no modificar despues de esta linea
 module.exports = { cuadradosOrdenados }