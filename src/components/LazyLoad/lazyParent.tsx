import { lazy, Suspense, useState } from "react";
// import LazyChild from "./lazyChild";

const LazyChild = lazy(()=>import('./lazyChild'));
function LazyParent() {
  const  [load,setLoad] = useState(false);
  return (
    <>
      <div>lazyParent</div>
      {
        load?  <Suspense fallback={<h4>loading......</h4>}><LazyChild/></Suspense>    :null

      }
      <button onClick={()=>setLoad(true)}>Load child</button>

    </>
  );
}

export default LazyParent;



// here load child will be visible on click but in network tab we can see that before getting viible or
//  evenn before the intention of showing the child component the child code is loaded earlier 

//  if the component and code is less then toh its ok but what if we have multiple component and all the code is heavy in size 
//  then in that case the initial load time of application will be slow .

// to solve this we use lazy and suspense 

// const LazyChild = lazy(()=>import('./lazyChild')); this is suffecient to prevent the loading upfront but to show the loader or some 
// indication while the component is being loaded we use Suspense
// and fallback property of suspense is used for adding the html to show