// aca puedes importar modulos o definir variables/helpers

function validarSubserie(arr, secuencia) {
  let pos = 0;
  let res = [];
  for (let i=0; i<arr.length; i++ ){
    if(arr[i] == secuencia[pos]){
      res.push(secuencia[pos]);
      pos++;
    }
  }
  return res.length == secuencia.length;
}  
  // no modificar despues de esta linea
 module.exports = { validarSubserie }