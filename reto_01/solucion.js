// aca puedes importar modulos o definir variables/helpers

const arr = [3, 5, -4, 8, 11, 1, -1, 6];
const objetivo = 10;
const result = sumaObjetivo(arr, objetivo);
console.log(result);

function sumaObjetivo(array, objetivo) {
  let res = [];
  for (let i=0; i<array.length; i++) {
    for(let j=0; j<array.lengthcd ; j++){
      if(array[i] != array[j]){
        if(array[i] + array[j] == objetivo){
          array[i].append(res);
          array[j].append(res);
        }
      }
    }
  }
  return res;
}
  
  // no modificar despues de esta linea
 module.exports = { sumaObjetivo }