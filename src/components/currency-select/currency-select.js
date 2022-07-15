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
  setInput,
  echoInput,
}) => {
  console.log(currencies);
  console.log(selectedCurrency);
  return (
    <select
      {...{
        onChange(event) {
          const currentCurrency = event.target.value;

          setSelectedCurrency(currentCurrency);

          if (isBase) {
            console.log('hello');
            echoInput(input * (tree?.[currentCurrency]?.[quoteCurrency] || 0))
          } else {
            console.log('world');
            echoInput(input / (tree?.[baseCurrency]?.[currentCurrency] || 0))
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
