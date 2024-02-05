import {useState } from 'react'

function InputField(){
    const [name, setName] = useState("vishal");

    return(
        <div>
            <input
            type="text"
            value = {name}
            onChange={(e)=>{setName(e.target.value)}}
            />

            <h1>Hii , {name} </h1>
        </div>
    )
}

export default InputField;