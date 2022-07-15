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
  echoInput,
}) => {
  return (
    <select
      {...{
        onChange(event) {
          const currentCurrency = event.target.value;

          setSelectedCurrency(currentCurrency);

          if (isBase) {
            echoInput(input * (tree?.[currentCurrency]?.[quoteCurrency] || 0));
          } else {
            echoInput(input / (tree?.[baseCurrency]?.[currentCurrency] || 0));
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
