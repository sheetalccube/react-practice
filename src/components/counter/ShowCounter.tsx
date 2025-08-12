import { useEffect } from "react";

interface ShowCounterProps {
  counter: number;
  data: number;
}

function ShowCounter({ counter, data }: ShowCounterProps) {
  function getCounter() {
    console.log("getcounter is working");
  }
  function handleData() {
    console.log("handle data is working");
  }
  useEffect(() => {
    handleData();
  }, [data]);
  useEffect(() => {
    getCounter();
  }, []);

  useEffect(() => {
    return () => {
      console.log("on unmount");
    };
  }, []);

  //   if this component is unmounting from parent then unmount will trigger

  return (
    <div>
      <h5>counter: {counter}</h5>
      <h5>data: {data}</h5>
    </div>
  );
}

export default ShowCounter;
