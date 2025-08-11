function StudyGen() {
  const user = {
    name: "sheetal",
    age: 27,
    isAdmin: false,
  };
  const userName = "sheetal";
  const userAge = 29;
  // this function accept data as number and return number
  function identityOne(data: number): number {
    return data;
  }
  identityOne(45);
  // this function accepts string and returns nothing means void
  function two(data: string) {
    console.log("identity 22222", data);
  }
  two("string");
  // this function accepts object and returns nothing means void

  function three(data: object) {
    console.log("identity 3333", data);
  }
  three(user);
  // use of interface
  interface user {
    name: string;
    age: number;
    isAdmin?: boolean;
  }
  function useInterface(data: user) {
    return data;
  }
  useInterface(user);

  // use of generic

  function useGen<T>(data: T): T {
    return data;
  }
  useGen(user);
  useGen(userName);
  useGen(userAge);

  return (
    <>
      <h6>generic , type and interface </h6>
    </>
  );
}
export default StudyGen;
