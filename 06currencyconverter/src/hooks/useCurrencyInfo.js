import {useState, useEffect} from "react"

// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json

function useCurrencyInfo(currency){
    const [data, setData ] = useState({});
    
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res));
        
    }, [currency])

  
    
    return data;
}


export default useCurrencyInfo;