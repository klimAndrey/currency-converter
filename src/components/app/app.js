import { useEffect, useState } from "react";
import { ALL_CURRENCIES } from "../../constants/all-currencies";
import AppInfo from "../app-info/app-info";
import CurrencyExchange from "../currency-exchange/currency-exchange";
import "./app.css";

const genCurencyUrl = (currency) =>
  `https://open.er-api.com/v6/latest/${currency}`;

const currencies = ALL_CURRENCIES; // ['USD', 'UAH', 'EUR'];

function App() {
  const [currencyTree, setCurrencyTree] = useState({});
  const [usd, setUsd] = useState(0);
  const [eur, setEur] = useState(0);

  useEffect(() => {
    const tree = {};
    const requests = [];

    currencies.forEach((c) => {
      const req = fetch(genCurencyUrl(c))
        .then((res) => res.json())
        .then(({ rates }) => (tree[c] = rates));
      requests.push(req);
    });

    Promise.all(requests).then(() => {
      setCurrencyTree(tree);
      setUsd(tree["USD"]["UAH"] || 0);
      setEur(tree["EUR"]["UAH"] || 0);
    });
  }, []);

  return (
    <div className="app">
      <AppInfo usd={usd} eur={eur} />
      <CurrencyExchange {...{ tree: currencyTree, currencies }} />
    </div>
  );
}

export default App;
