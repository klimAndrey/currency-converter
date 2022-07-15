import { useState } from "react";
import CurrencyInput from "../currency-input/currency-input";

const CurrencyExchange = ({ tree }) => {
  let [baseInput, setBaseInput] = useState(0);
  let [quoteInput, setQuoteInput] = useState(0);

  return (
    <>
      <CurrencyInput
        {...{
          tree,
          input: baseInput,
          setInput: setBaseInput,
          echoInput: setQuoteInput,
          initCurrency: 'UAH',
        }}
      />
      <CurrencyInput
        {...{
          tree,
          input: quoteInput,
          setInput: setQuoteInput,
          echoInput: setBaseInput,
          initCurrency: 'USD',
        }}
      />
    </>
  );
};

export default CurrencyExchange;
