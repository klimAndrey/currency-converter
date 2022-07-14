import "./app-info.css";

const AppInfo = ({ usd, eur }) => {
  return (
    <div className="app-info">
      <h1>Актуальный курс валют</h1>
      <h2>Доллар: 1$ - 
        <span style={{color: "#21a454"}}>{usd}</span></h2>
      <h2>Евро: 1€ -
        <span style={{color: 'greenyellow'}}>{eur}</span> </h2>
    </div>
  );
};

export default AppInfo;
