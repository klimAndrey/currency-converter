import CurrencySelect from "../currency-select/currency-select";
import "./currency-input.css";

const CurrencyInput = ({
  currencies,
  tree,
  input,
  setInput,
  setEchoInput,
  setSelectedCurrency,
  baseCurrency,
  quoteCurrency,
  isBase,
  echoInput,
}) => {
  return (
    <>
      <div className="currencyExchange">
        <CurrencySelect
          {...{
            tree,
            input,
            isBase,
            setEchoInput,
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
            let i = event.target.value;

            if (i === '') {
              setInput('');
              setEchoInput('');

              return;
            }

            if (/^0\d$/.test(i)) i = i[1];

            if (!/^\d+\.?\d*$/.test(i)) return;

            const num = +i;

            setInput(i);

            if (isBase) {
              setEchoInput(num * (tree?.[baseCurrency]?.[quoteCurrency] || 0));
            } else {
              setEchoInput(
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
