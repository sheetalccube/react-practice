// import { forwardRef, type Ref } from "react";

// function UserInput(props: object, inputRef: Ref<HTMLInputElement>) {
//   return (
//     <div>
//       UserInput
//       <input ref={inputRef} type="text" placeholder="Enter user name" />
//     </div>
//   );
// }

// export default forwardRef(UserInput);


// this is an old way of recieving a ref from the parent component using React.forwardRef.




// React 19
interface UserInputProps {
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement>; 
}

function UserInput({ placeholder, ref }: UserInputProps) {
  return <input ref={ref} placeholder={placeholder ?? "Enter user name"} />;
}

export default UserInput;


