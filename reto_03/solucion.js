// aca puedes importar modulos o definir variables/helpers

/**
 * 
 * @param {number[]} arr - array de enteros en orden creciente
 * @return {number[]} array de cuadrados en orden creciente
 */
function cuadradosOrdenados(arr) {
    /*for (let i=0; i<arr.length; i++){
      res.push(arr[i]**2);
    }*/
    const res = arr.map(x => x**2);
    res.sort((a, b) => {
      return a - b;
    });
    return res;
}

  // no modificar despues de esta linea
 module.exports = { cuadradosOrdenados }