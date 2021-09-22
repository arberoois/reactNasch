// funciones que se DECLARAN con la palabra reservada function
function Fn() {
  this.prop = "propiedad";
  return "Chanchito Feliz";
}
const r = new Fn();
console.log(r);

// fat arrow function, no se pueden llamar con new, no tienen contexto de THIS.
const fatFn = () => {
  return "Chanchito Feliz";
};

const r1 = fatFn();
console.log(r1);

// return implicito
const fnR = () => 2;

console.log(fnR());
