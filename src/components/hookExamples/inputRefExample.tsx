import { useRef } from "react";

function InputRefExample() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current?.focus();
      inputRef.current.placeholder = "please enter name";
      inputRef.current.style.color = "red";
      inputRef.current.value = "1223";
    }
    console.log(inputRef, "-----");
  };
  function toggleInput() {
    if (inputRef.current) {
      console.log("in");
      inputRef.current.style.display = "none";
    }
  }

  return (
    <>
      <div>InputRefExample</div>

      <input ref={inputRef} type="text" placeholder="Enter user name" />
      <button onClick={focusInput}>Focus input</button>
      <button onClick={() => toggleInput}>Toggle input</button>
    </>
  );
}

export default InputRefExample;

// direct dom ko manipulate nhi krna chhiye isiliye hook ka use krte h
