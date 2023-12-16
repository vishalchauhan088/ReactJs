import { useState } from 'react'

import ColorButton from './components/button'


function App() {
  const [color, setColor] = useState("bg-indigo-300")

 
  

  return (
    // <div className="h-screen w-full bg-indigo-300" style={{backgroundColor:color}} >

    <div className={`h-screen wfull ${color}`}  >
      

      <div className="flex flex-row justify-center">

        {/* <button onClick= {()=>{setColor("bg-red-300")}}  >
            Red
        </button>
      
     
        <button onClick= {()=>{setColor("bg-green-400")}}  >
            Green
        </button>
      
     
        <button onClick= {()=>{setColor("bg-blue-300")}}  >
            blue
        </button> */}
          <ColorButton color="green" onclick={()=>setColor("bg-green-300")}/>
          <ColorButton color="red" onclick={()=>setColor("bg-red-300")}/>
          <ColorButton color="blue" onclick={()=>setColor("bg-blue-400")}/>

      </div>
    </div>
  )
}

export default App
