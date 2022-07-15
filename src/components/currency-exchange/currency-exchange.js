import { useState } from "react";
import CurrencyInput from "../currency-input/currency-input";

const CurrencyExchange = ({ tree }) => {
  const initBaseCurrency = 'UAH';
  const initQuoteCurrency = 'USD';
  let [baseInput, setBaseInput] = useState(0);
  let [quoteInput, setQuoteInput] = useState(0);
  let [baseCurrency, setBaseCurrency] = useState(initBaseCurrency);
  let [quoteCurrency, setQuoteCurrency] = useState(initQuoteCurrency);

  return (
    <>
      <CurrencyInput
        {...{
          tree,
          input: baseInput,
          setInput: setBaseInput,
          echoInput: setQuoteInput,
          setSelectedCurrency: setBaseCurrency,
          baseCurrency,
          quoteCurrency,
          isBase: true,
        }}
      />
      <CurrencyInput
        {...{
          tree,
          input: quoteInput,
          setInput: setQuoteInput,
          echoInput: setBaseInput,
          setSelectedCurrency: setQuoteCurrency,
          baseCurrency,
          quoteCurrency,
          isBase: false,
        }}
      />
    </>
  );
};

export default CurrencyExchange;
