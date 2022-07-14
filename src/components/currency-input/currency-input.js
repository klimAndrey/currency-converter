import ItemCurrency from "../select-item-currency/select-item-currency";
import "./currency-input.css";

const CurrencyInput = () => {
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
        />
      </div>
    </>
  );
};
export default CurrencyInput;
