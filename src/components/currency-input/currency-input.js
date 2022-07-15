import { useState } from "react";
import CurrencySelect from "../currency-select/currency-select";
import "./currency-input.css";

const CurrencyInput = ({ tree, input, setInput, echoInput, initCurrency }) => {
  let [selectedCurrency, setSelectedCurrency] = useState(initCurrency);

  return (
    <>
      <div className="currencyExchange">
        <select name="currency" id="" className="selectCurrency">
          {["USD", "EUR", "UAH"].map((currency, key) => (
            <CurrencySelect
              {...{ selectedCurrency, setSelectedCurrency, currency, key }}
            ></CurrencySelect>
          ))}
        </select>
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
