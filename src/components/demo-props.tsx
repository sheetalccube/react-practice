interface DemoProps {
name:string
age:number
}


function Demo({name,age}:DemoProps){
  return(
    <div>
      {name}
      {age}
    </div>
  );
}
export default Demo;