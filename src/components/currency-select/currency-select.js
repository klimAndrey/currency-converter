import "./currency-select.css";

const CurrencySelect = ({ currency }) => {
  return <option value={currency}>{currency}</option>;
};

export default CurrencySelect;
