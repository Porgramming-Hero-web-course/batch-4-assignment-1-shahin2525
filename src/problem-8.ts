const validateKeys = <T>(obj: T, keys: (keyof T)[]) => {
  // console.log(keys);
  const objKeys = Object.keys(obj as keyof T[]);
  // console.log(objKeys);

  const keysExists = keys.every((key) => objKeys.includes(key as string));
  // console.log(keysExists);
  if (keysExists) {
    return true;
  } else {
    return false;
  }
};
const person = { name: "Alice", age: 2, email: "alice@example.com" };
const checkIsValid = validateKeys(person, ["age"]);
console.log(checkIsValid);
