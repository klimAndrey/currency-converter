import "./currency-input.css";

const CurrencyInput = () => {
  return (
    <>
      <div className="currencyExchange">
        <select name="currency" id="" className="selectCurrency">
          <option value="">$ USD</option>
          <option value="">₴ UAH</option>
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
