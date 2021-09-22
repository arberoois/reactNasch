// Transformando argumentos a arreglos, todos los parametros que llegan se transforman en un array
// Siempre tiene que ser el ultimo parametro

const rest = (a, ...argumentos) => {
  console.log(a);
  console.log(argumentos);
};

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

rest(1, 2, 3);

const { a, b, ...restObj } = obj;
console.log(a, b, restObj);

const arr = [1, 2, 3, 4, 5];

const [a1, b1] = arr;
console.log(a1, b1);
