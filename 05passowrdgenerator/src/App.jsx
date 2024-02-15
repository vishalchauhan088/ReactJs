import { useState,useCallback, useEffect , useRef } from 'react'

import './App.css'

function App() {



  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(" ")

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password.substring(0, Math.min(10,password.length)));
  }, [password])



  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    console.log("passowrd generator called",charAllowed,numberAllowed);
    
    if(numberAllowed){str += "1234567890"; console.log("nallowed")}
    if(charAllowed){str += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/"; console.log("callowed")}
    console.log(str.length);

    for(let i=1 ;i<=length;i++){
     let index =  Math.floor((Math.random()* str.length));
      let char = str.charAt(index);
      pass += char;
    }
    setPassword(pass);
    // using useEffect(callback, depedencies) hook : takes a callback function and defe

   
  },[length,numberAllowed,charAllowed])




  useEffect(() => {passwordGenerator()} , [length,numberAllowed,charAllowed])

  

  return (
    <>
      
      <div className="m-10 w-auto  h-screen bg-gray-800 ">

        <h1 className="text-center text-4xl text-yellow-500 mt-5 px-10 py-10">Password Generator</h1>

        <div className="mx-auto text-white">

          <input className='center w-1/3 mt-5 h-10 rounded-l-2xl outline-none text-black' value={password} placeholder='password'
           
            readOnly
            ref={passwordRef}

          ></input>
          <button className='bg-blue-900 h-10 text-white w-32 rounded-r-2xl'

            onClick={copyPassword}
          
          >copy</button>



          <div className="flex mt-5 ">
            <label htmlFor="range" className='text-white text-bold'>Length:{length}</label>
            <input 
              type="range"

              min={6}
              max={100}
              value = {length}
              className='cursor-pointer'
            
              onChange={(e)=>{setLength(e.target.value)}}
            
            name="range"  />

            <label htmlFor="number-allowed">Number-Allowed :</label>

            <input type="checkbox"
              checked= {numberAllowed}
              onChange= {() =>{
                setNumberAllowed((prev) => !prev);
              }}
             name="number-allowed" id="" 
            />

            <label htmlFor="char-allowed">Character Allowed : </label>
            <input type="checkbox"
              checked= {charAllowed}
              onChange={() => {
                setCharAllowed( (prev) => !prev ); // we get access to  vlaue: variable can change
              }}
             
             name="char-allowed" id="" 
            />

          </div>
        </div>

      </div>
    </>
  )
}

export default App
