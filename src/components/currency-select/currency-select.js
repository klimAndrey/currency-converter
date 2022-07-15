import "./currency-select.css";

const CurrencySelect = ({ currencies, selectedCurrency, setSelectedCurrency }) => {
  return (
    <select {...{
      onChange(event) {
        setSelectedCurrency(event.target.value)
      }
  }}>
      {currencies.map((c, key) => {
        return (
          <option {...{ value: c, key, selected: c === selectedCurrency }}>
            {c}
          </option>
        );
      })}
    </select>
  );
};

export default CurrencySelect;
