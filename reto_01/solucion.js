// aca puedes importar modulos o definir variables/helpers
function sumaObjetivo(array, objetivo) {
  let res = [];
  for (let i=0; i<array.length; i++) {
    for(let j=0; j<array.length; j++){
      if(i != j){
        if(array[i] + array[j] == objetivo){
          res.push(array[i]);
          res.push(array[j]);
          return res;
        }
      }
    }
  }
  return res;
}

  // no modificar despues de esta linea
 module.exports = { sumaObjetivo }