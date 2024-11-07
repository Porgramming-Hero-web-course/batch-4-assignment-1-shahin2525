interface Profile {
  name: string;
  age: number;
  email: string;
}
const updateProfile = (obj: Profile, updateObj: Partial<Profile>) => {
  const updatedDataKeys = Object.keys(obj);
  const newDataKeys = Object.values(updateObj);
  console.log(updatedDataKeys, newDataKeys);
  //   const updatedDataValues =
};
const myProfile: Profile = { name: "Alice", age: 20, email: "alice@example" };
const updatedProfile = updateProfile(myProfile, { age: 30 });
