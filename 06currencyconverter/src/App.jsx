import { useEffect, useState } from 'react'

import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

import './App.css'

function App() {

  const [fromAmount, setFromAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");

  const data = useCurrencyInfo(fromCurrency);

  const [toCurrency, setToCurrency] = useState("inr");
  const [toAmount , setToAmount] = useState(0);
  

  const handleFromCurrencyChange = (event) =>{
    setFromCurrency(event.target.value);
  }

  const handleFromAmountChange = (event) =>{
    setFromAmount(event.target.value);
  }
  const handleToCurrencyChange = (event) =>{
      setToCurrency(event.target.value);
  }
  const handleToAmountChange = (event) =>{

  }
  
  
  useEffect(()=>{
    let specifiedCurrency = data[fromCurrency];
    if(specifiedCurrency && specifiedCurrency[toCurrency] ){
      setToAmount(specifiedCurrency[toCurrency]  * fromAmount );
      
    }
  },[data,fromAmount,toCurrency, toAmount])
  
 
  return (
    <>
      <InputBox label="from" data={data} amount={fromAmount} currency={fromCurrency} handleAmountChange={handleFromAmountChange} handleCurrencyChange={handleFromCurrencyChange}/>
      <InputBox label="To" data={data} amount={toAmount} currency={toCurrency} handleAmountChange={handleToAmountChange} handleCurrencyChange={handleToCurrencyChange}/>
       
              
    </>
  )
}

export default App
