import { useState } from "react";
import CurrencySelect from "../currency-select/currency-select";
import "./currency-input.css";

const CurrencyInput = ({ tree, input, setInput, echoInput, initCurrency }) => {
  let [selectedCurrency, setSelectedCurrency] = useState(initCurrency);

  return (
    <>
    <h1>{selectedCurrency}</h1>
      <div className="currencyExchange">
        <CurrencySelect {...{
          setSelectedCurrency,
          selectedCurrency,
          currencies: ['USD', 'EUR', 'UAH'], // TODO rm hardcode
        }}/>
        <input
          type="text"
          placeholder="Введите сумму"
          className="inputCurrency"
          value={input}
          onChange={(event) => {
            const i = event.target.value;

            if (!/^\d*$/.test(i)) return;

            setInput(i);
            echoInput(+i);
          }}
        />
      </div>
    </>
  );
};
export default CurrencyInput;
