import {useState} from 'react'

import './App.css'



function App() {
  
  const [count, setCounter] = useState(0);

  let increase = ()=>{
      if(count<20){
        setCounter(count+1);
      }
      else{
        setCounter(0);
      }
  }
  let decrease = () =>{
      if(count>-20){
        setCounter(count-1);
      }
      else{
        setCounter(0);
      }
  }

  return (
    <>
      <h1>counter</h1>
      <div className="m-5 bg-gray-500">
        <h2>{count}</h2>

        <button className="m-5" onClick={increase}> increase</button>
        <button className="m-5" onClick = {decrease}>decrease</button>
      </div>
    </>
  )
}

export default App
