// aca puedes importar modulos o definir variables/helpers

const arr = [3, 5, -4, 8, 11, 1, 6];
const objetivo = 9;
const result = sumaObjetivo(arr, objetivo);
console.log(result);

function sumaObjetivo(array, objetivo) {
  let res = [];
  for (let i=0; i<array.length; i++) {
    for(let j=0; j<array.length; j++){
      if(i != j){
        if((array[i] + array[j] == objetivo) && !(res.includes(array[i]))){
          res.push(array[i]);
          res.push(array[j]);
        }
      }
    }
  }
  return res;
}
  
  // no modificar despues de esta linea
 module.exports = { sumaObjetivo }