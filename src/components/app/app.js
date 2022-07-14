import { useEffect, useState } from "react";
import AppInfo from "../app-info/app-info";
import CurrencyExchange from "../currency-exchange/currency-exchange";
import "./app.css";

const genCurencyUrl = (currency) =>
  `https://open.er-api.com/v6/latest/${currency}`;

function App() {
  const [uah, setUah] = useState(0);
  const [usd, setUsd] = useState(0);



  useEffect(() => {
    fetch(genCurencyUrl("UAH"))
      .then((res) => res.json())
      .then((data) => setUsd(() => data.rates.USD));

    fetch(genCurencyUrl("USD"))
      .then((res) => res.json())
      .then((data) => setUah(() => data.rates.UAH));
  }, []);

  return (
    <div className="app">
      <AppInfo uah={uah} usd={usd} />
      <CurrencyExchange />
    </div>
  );
}

export default App;
