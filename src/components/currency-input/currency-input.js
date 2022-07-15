import { useState } from "react";
import ItemCurrency from "../select-item-currency/select-item-currency";
import "./currency-input.css";

const CurrencyInput = ({ tree }) => {
  let [input, setInput] = useState('');

  return (
    <>
      <div className="currencyExchange">
        <select name="currency" id="" className="selectCurrency">
          {["USD", "EUR", "UAH"].map((c) => <ItemCurrency currency={c} key={c}></ItemCurrency> )}
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
          }}
        />
      </div>
    </>
  );
};
export default CurrencyInput;
