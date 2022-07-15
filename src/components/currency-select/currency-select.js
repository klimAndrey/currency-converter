import "./currency-select.css";

const CurrencySelect = ({
  tree,
  currencies,
  selectedCurrency,
  setSelectedCurrency,
  baseCurrency,
  quoteCurrency,
  input,
  isBase,
  setEchoInput,
}) => {
  return (
    <select
      {...{
        onChange(event) {
          const currentCurrency = event.target.value;

          setSelectedCurrency(currentCurrency);

          if (isBase) {
            setEchoInput(input * (tree?.[currentCurrency]?.[quoteCurrency] || 0));
          } else {
            setEchoInput(input / (tree?.[baseCurrency]?.[currentCurrency] || 0));
          }
        },
      }}
    >
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
