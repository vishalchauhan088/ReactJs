import {useState } from 'react'

function InputField({movieName,handleOnChange}){
    

    return(
        <form >
            <input
            type="text"
            value = {movieName}
            onChange={handleOnChange}
            placeholder='Search Movie'

            />



           
        </form>
    )
}

export default InputField;