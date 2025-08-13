interface DemoProps {
name:string
age:number,
  // showName: () => void; 
  showName: (name:string) => void; // function takes a string 

// both the type works for receiving name from parent 

}


function Demo({name,age,showName}:DemoProps){
  return(
    <div>
      {name}
      {age}
      {/* <button onClick={() => showName()}>Show Name</button> */}
      <button onClick={() => showName(name)}>Show Name</button>
    </div>
  );
}
export default Demo;