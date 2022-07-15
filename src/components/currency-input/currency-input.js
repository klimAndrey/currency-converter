import { useState } from "react";
import ItemCurrency from "../select-item-currency/select-item-currency";
import "./currency-input.css";

const CurrencyInput = ({ tree, input, setInput, echoInput, initCurrency }) => {
  let [currency, setCurrency] = useState(initCurrency);

  return (
    <>
      <div className="currencyExchange">
        <select name="currency" id="" className="selectCurrency">
          {["USD", "EUR", "UAH"].map((c) => (
            <ItemCurrency
              currency={c}
              key={c}
              selectedCurrency={currency}
            ></ItemCurrency>
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
