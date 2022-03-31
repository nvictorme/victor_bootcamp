// aca puedes importar modulos o definir variables/helpers
function sumaObjetivo(array, objetivo) {
  let res = [];
  for (let i=0; i<array.length; i++) {
    let b = array.indexOf(objetivo - array[i]);
    if(array[b] != undefined && b != i){
      res.push(array[i]);
      res.push(array[b]);
      return res;
    }
  }
  return res;
}
  // no modificar despues de esta linea
 module.exports = { sumaObjetivo }