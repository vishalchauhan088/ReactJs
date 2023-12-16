import { useState } from 'react'

import './App.css'

function App() {
  
  // let counter = 10;

  //using state
  let [counter, setCounter] = useState(10);

  let decrease = ()=>{
    
      
    console.log("Decrease called" + Math.random() + `counter : ${counter}`);
    
    if(counter >0){
      setCounter(counter-1);
    }
  }
  let increase = ()=>{
  
    
    console.log("increase button called:" + Math.random()+ `counter : ${counter}`);
    if(counter <10){
      setCounter(counter+1);
    }
    
  }

  return (
   <>
        <h2>npm create vite@latest || to create rect app without node modules</h2>
        <h2>npm install || to install the node modules</h2>

        <br/>
        <h3><strong>Counter : {counter}</strong></h3>
        <button onClick={increase}>increase counter {counter}</button>
        <br/>
        <button onClick={decrease}>decrease counter {counter}</button>
       
       
   </>


  );
}

export default App
