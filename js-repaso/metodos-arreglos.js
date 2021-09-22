const arr = [0, 1, 2, 3, 4];

const r = arr.filter((x) => x > 2);
console.log(r);

const mapped = arr.map((x) => x * 2);
console.log(mapped);

const r1 = arr.reduce((acc, el) => acc + el, 0);
console.log(r1);
const getMax = (a, b) => Math.max(a, b);
const r2 = arr.reduce(getMax, 0);
console.log(r2);
