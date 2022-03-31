// aca puedes importar modulos o definir variables/helpers

function sumaObjetivo(array, objetivo) {
    // escribe tu solucion aqui
    console.log('Por que ella no me ama?');
    let result = [];
    array.forEach(a => {
      let b = objetivo - a;
      let index = array.indexOf(b);
      if (index != -1) {
        result = [a, array[index]];
      }
    });
    return result;
}
  
  // no modificar despues de esta linea
 module.exports = { sumaObjetivo }