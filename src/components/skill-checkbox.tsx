import { useState } from "react";

function CheckBoxEx() {
   
  const [skills,setSkills]= useState(['hy']);
  function handleSkills(event:React.ChangeEvent<HTMLInputElement>){
    // setSkills(event.target.value)
    console.log(event.target.value,event.target.checked);
    if(event.target.checked){
      setSkills([...skills,event.target.value]);
    }else{
      setSkills(skills.filter((item)=>item!==event.target.value));
    }
  }
  return (
    <div>
      <h4>Select your skill</h4>
      <input type="checkbox" id="angular" value='angular'onChange={handleSkills}/>
      <label htmlFor="angular">Angular</label>
      <br />
      <input type="checkbox" id="javascript" value='javascript'onChange={handleSkills}/>
      <label htmlFor="javascript">JavaScript</label>
      <br />
      <input type="checkbox" id="typescript" value='typescript'onChange={handleSkills}/>
      <label htmlFor="typescript">TypeScript</label>
      <br />
      <input type="checkbox" id="jquery" value='checkbox'onChange={handleSkills}/>
      <label htmlFor="jquery">JQuery</label>
      <br />
      <input type="checkbox" id="react" value='react'onChange={handleSkills}/>
      <label htmlFor="react">React</label>
      <br />
      <input type="checkbox" id="html" value='html'onChange={handleSkills}/>
      <label htmlFor="html">HTML</label>
      <br />
      <p>{skills.toString()}</p>
    </div>
  );
}
export default CheckBoxEx;
