import "./app-info.css";

const AppInfo = ({ usd, uah }) => {
  return (
    <div className="app-info">
      <h1>Актуальный курс валют</h1>
      <h2>Доллар: 1$ - <span style={{
        color: 'rebeccapurple'
      }}>{usd}</span></h2>
      <h2>Евро: 1€ - </h2>
    </div>
  );
};

export default AppInfo;
