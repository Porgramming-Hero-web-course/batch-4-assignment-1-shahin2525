const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};
const user = {
  name: "alice",
  age: 20,
};
const propertyValue = getProperty(user, "name");
console.log(propertyValue);
