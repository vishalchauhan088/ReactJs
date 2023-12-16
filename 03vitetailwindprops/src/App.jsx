import { useState } from 'react'

import './App.css'
import  Card from "./components/card"

let createObject = (name, email)=>{
  return {
    "name" : name,
    "email": email
    
  }
}
let ob1 = createObject("vishal ", "vishalchauhan0688@gmail.com");
let ob2 = createObject("vishal chauhan " , "vishalchauha06882@gmail.com");
let ob3 = createObject("devyansh " , "asefklhauha06882@gmail.com");



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline border p-5 bg-green-600 rounded">
      Hello world!</h1>


     <div className="flex flex-row flex-wrap" >
      <Card obj = {ob1}/>
      <Card obj = {ob2}/>
      <Card obj = {ob3}/>
      <Card obj = {ob1}/>
      <Card obj = {ob2}/>
      <Card obj = {ob3}/>
     </div>

    

    </>

    
  )
}

export default App
