//  interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// controlled component

import { useState } from "react";

function ControlledExample() {
  const [name, setName] = useState("");
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("gudgao");
  function clearField() {
    setEmial("");
    setName("");
    setPassword("");
    setGender("");
    // yhe clear value ho rhi h but input field s tb tk nhi jaegi jb tk value ko bind nhi krenge
  }
  return (
    <div>
      {/* <form> */}
      <label>Name</label>
      <br />
      <input
        name="name"
        value={name}
        type="text"
        placeholder="Enter name"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <br />
      <label>Email</label>
      <br />

      <input
        name="email"
        value={email}
        type="text"
        placeholder="Enter email"
        onChange={(event) => setEmial(event.target.value)}
      ></input>
      <br />
      <label>Password</label>
      <br />

      <input
        name="password"
        value={password}
        type="text"
        placeholder="Enter password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <br />
      <label>Select Gender</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        onChange={(event) => setGender(event.target.value)}
        checked={gender == "male"}
      />
      <label htmlFor="male">Male</label>

      <br />
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender == "female"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label>
      <h5>{gender}</h5>
      <h4>select City</h4>
      <select
        defaultValue={"gudgao"}
        onChange={(event) => setCity(event.target.value)}
      >
        <option value={"indore"}>Indore</option>
        <option value={"pune"}>Pune</option>
        <option value={"gudgao"}>Gudgao</option>
        <option value={"mumbai"}>Mumbai</option>
      </select>
      <h5>selected city:{city}</h5>
      <br />

      <button type="submit">submit</button>
      <button type="button" onClick={clearField}>
        clear
      </button>
      {/* </form> */}
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{password}</h3>
    </div>
  );
}
export default ControlledExample;

// to show the selected value initially
// checked={gender=='female'}
