import { useRef } from "react";
import UserInput from "./UserInput";

function ForwardRef() {
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

  return (
    <>
      <div>ForwardRef</div>
      <UserInput ref={inputRef}/>
      <button onClick={focusInput}>Focus input</button>
    </>
  );
}

export default ForwardRef;
