import React from "react"


const obj = {
    usd:{
        "inr":83,
        "usd":1
    }
}
    
function InputBox({label,data=obj,amount,currency=usd,handleAmountChange,handleCurrencyChange}){
    return(
        <>
                <div className="text-green-800 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl m-5 p-5">
                    <div className="m-5">{label}</div>
                    <label className="m-5" htmlFor="amount">Amount : </label>
                    <input type="number" name="amount" placeholder='2'
                    value={amount}
                    onChange = {handleAmountChange}
                    />


                    <label htmlFor="currency" className="m-5">Choose a currency:</label>
                    <select id="currency" value={currency} onChange={handleCurrencyChange}>
                        {data && typeof data === 'object' &&    Object.entries(data[currency]).map(([key,value]) => (
                            
                        <option value={key}>{key}</option>
                        ))};
                    
                    
                    </select>
                

                
                </div>
        </>
    )
}

export default InputBox;    

