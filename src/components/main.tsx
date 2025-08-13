import { useState } from "react";
import CheckBoxEx from "./skill-checkbox";
import ControlledExample from "./controlled-form";
import ItemKey from "./item-key";
import Demo from "./demo-props";
import StudyGen from "./myGenerics";
import Counter from "./counter/counter";
import Toggle from "./toggle-conditional-rendering";
import LazyParent from "./LazyLoad/lazyParent";
import StyledExample from "./styledExample/main";
import InputRefExample from "./hookExamples/inputRefExample";

function showName(names: string) {
  alert(names);
}

function App() {
  console.log("app component is called");
  const [details, setDetails] = useState("");
  const name = "sheetal";
  const age = 27;
  let fruitname = "kiwi";
  const [fruit, setFruit] = useState("apple");
  function handleFruit() {
    setFruit("bnana");
  }
  function changevar() {
    fruitname = "grapes";
    console.log(fruitname);
  }

  function funccalled() {
    alert("hy");
    console.log("functio called");
  }

  return (
    <div>
      {/* <UsersMain /> */}
      {/* <Todos /> */}
      <hr />
      <LazyParent />
      <hr/>
      <StyledExample/>
      <hr/>
      <InputRefExample/>
      
      <h1>
        my name is {name} and age is {age}
      </h1>
      <h1> checkbox form</h1>
      <CheckBoxEx />
      <hr />
      <h1>User Form </h1>
      <ControlledExample />
      <hr />
      <h1>Item key example</h1>
      <ItemKey></ItemKey>
      <hr />
      <h1>props</h1>
      {/* call parent component function from child component */}
      <Demo name="g" age={12} showName={() => showName('hello')}/>
      <hr />
      <h1>Generics and Interfaces</h1>
      <StudyGen />
      <hr />
      <h1>function call</h1>
      <button onClick={funccalled}>click me </button>
      <button onClick={() => alert("hello")}>alert </button>
      <button onClick={() => showName("apple")}>Apple</button>
      <button onClick={() => showName("banana")}>Bnana</button>
      <button onClick={handleFruit}>change fruit usestate</button>
      <button onClick={changevar}>change fruit variable</button>
      <h1>{fruit}</h1>
      <h2>{fruitname}</h2>
      <hr />
      <h1>counter</h1>
      <Counter />
      <hr />
      <h1>toggle</h1>
      <Toggle />
      {details && "there is details "}
      <button onClick={() => setDetails("bhaskar")}>update details</button>
      <hr />
    </div>
  );
}

export default App;
