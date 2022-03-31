# Validar Subserie

### Requerimiento:

Dados 2 arrays de enteros, escribe una función que verifique si un array es una sub-serie o sub-secuencia del otro.

#### Condiciones:

Una sub-serie es un conjunto de elementos que se encuentran en el array original, no son necesariamente adyacentes, pero si deben aparecer en el mismo orden. Por ejemplo:

Los números `[1, 3, 4]` son una sub-serie del array `[1, 2, 3, 4]`; los números `[2, 4]` son otra sub-serie.

NOTA: Un sólo número o el mismo array también son sub-series válidas. e.g.: `[3]` o `[1, 2, 3, 4]`.

##### ejemplo de entrada:

`const arr = [5, 1, 22, 25, 6, -1, 8, 10];`
`const secuencia = [1, 6, 10]`;

##### salida esperada:

`true`
