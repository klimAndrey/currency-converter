import CurrencySelect from "../currency-select/currency-select";
import "./currency-input.css";

/**
 *    USD            uah
 *     1     *30      30
 *    uah            usd
 *     1     *0.34     0.34
 *
 *
 *      USD 1     2    3
 *      UAH 30    60   90
 */

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
            setInput,
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
            const num = parseFloat(i);
            const notNumber = !num;

            if (notNumber) return;

            setInput(num);

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
