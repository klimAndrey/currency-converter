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
            setSelectedCurrency,
            selectedCurrency: isBase ? baseCurrency : quoteCurrency,
            currencies: ["USD", "EUR", "UAH"], // TODO rm hardcode
          }}
        />
        <input
          type="text"
          placeholder="Введите сумму"
          className="inputCurrency"
          value={input}
          onChange={(event) => {
            const i = event.target.value;

            if (!/^\d*$/.test(i)) return;

            setInput(i);

            if (isBase) {
              echoInput(+i * (tree?.[baseCurrency]?.[quoteCurrency] || 0));
            } else {
              echoInput((+i / (tree?.[baseCurrency]?.[quoteCurrency] || 0)) ?? 0);
            }
          }}
        />
      </div>
    </>
  );
};
export default CurrencyInput;
