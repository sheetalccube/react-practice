import { useEffect, useState } from "react";
import ShowCounter from "./ShowCounter";

function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [display,setDisplay] = useState(true);

  function callOnce() {
    console.log("callOnce");
  }

  //   useEffect(() => {
  //   callOnce();
  // });
  // will call the function on every updation kisi bi state me update hone par chalega

  // useEffect(() => {
  //   callOnce();
  // }, []);
  // will call the function  callOnce. only 1 time which will be initial load

  // useEffect(() => {
  //   callOnce();
  // },[count]);
  // will call the function on every updation of count state. only count state

  useEffect(() => {
    callOnce();
  }, [count, data]);
  // will call the function on every updation of count + data state

  return (
    <div>
      {/* <h1>Counter:{count}</h1> */}
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setData(data + 1)}>update data</button>
      
      <button onClick={()=>(setDisplay(!display))}>Toggle counter</button>
      {
        display?<ShowCounter counter={count} data={data}/>:null
      }

      <br />
    </div>
  );
}

export default Counter;
