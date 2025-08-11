import { useState } from "react";

function Toggle(){
  const value = true;
  const [display,setDisplay] = useState(true);
  return(
    <div>
      {
        display? 'sheetal sonsale':value?'now  second':'noooo'
      }
      <button onClick={()=>setDisplay(!display)}>handle display</button>
    </div>
  );
}
export default Toggle;