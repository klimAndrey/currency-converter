import { useState } from 'react'
import CurrencyInput from '../currency-input/currency-input'

const CurrencyExchange = ({ tree }) => {
    let [baseInput, setBaseInput] = useState(0);
    let [quoteInput, setQuoteInput] = useState(0);

    return <>
      <CurrencyInput tree={tree} input={baseInput} setInput={setBaseInput} echoInput={setQuoteInput}/>
      <CurrencyInput tree={tree} input={quoteInput} setInput={setQuoteInput} echoInput={setBaseInput}/>
    </>
}

export default CurrencyExchange
