import CurrencySelect from "../currency-select/currency-select";
import "./currency-input.css";

const CurrencyInput = ({
  currencies,
  tree,
  input,
  setInput,
  echoInput,
  setSelectedCurrency,
  baseCurrency,
  quoteCurrency,
  isBase,
}) => {
  return (
    <>
      <h1>{isBase ? baseCurrency : quoteCurrency}</h1>
      <div className="currencyExchange">
        <CurrencySelect
          {...{
            tree,
            input,
            isBase,
            echoInput,
            baseCurrency,
            quoteCurrency,
            setSelectedCurrency,
            selectedCurrency: isBase ? baseCurrency : quoteCurrency,
            currencies,
          }}
        />
        <input
          type="text"
          placeholder="Введите сумму"
          className="inputCurrency"
          value={input}
          onChange={(event) => {
            const i = event.target.value;
            
            if (!/^\d+\.?\d*$/.test(i)) return;

            const num = +i;

            setInput(i);

            if (isBase) {
              echoInput(num * (tree?.[baseCurrency]?.[quoteCurrency] || 0));
            } else {
              echoInput(
                num / (tree?.[baseCurrency]?.[quoteCurrency] || 0) ?? 0
              );
            }
          }}
        />
      </div>
    </>
  );
};

export default CurrencyInput;
