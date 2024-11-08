interface Profile {
  name: string;
  age: number;
  email: string;
}
const updateProfile = (updateObj: Profile, obj: Partial<Profile>) => {
  for (const [key, value] of Object.entries(obj)) {
    // console.log(key,value);
    updateObj[key as keyof Profile] = value as never;
  }
  return updateObj;
};
const myProfile: Profile = { name: "Alice", age: 20, email: "alice@example" };
const updatedProfile = updateProfile(myProfile, { name: "roki" });
console.log(updatedProfile);
