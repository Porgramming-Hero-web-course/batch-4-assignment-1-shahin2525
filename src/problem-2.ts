// problem 2

const removeDuplicates = (array: number[]) => {
  console.log(array);
  let unique: number[] = [];
  array.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });

  return unique;
};
const duplicatesRemoved = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5]);
console.log(duplicatesRemoved);
