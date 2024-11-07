const sumArray = (array: number[]) => {
  const total = array.reduce((ac, cu) => ac + cu, 0);
  return total;
};

const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
