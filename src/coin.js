import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selCoins, setSelCoins] = useState("0");
  const [result, setResult] = useState("0");
  const onChange = (event) => {
      setSelCoins(event.target.value);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    const priceUSD =event.target[0].value;
    calculate(priceUSD);
  }
  const calculate=(priceUSD)=>{
    setResult(priceUSD * selCoins);
  }
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json()
        .then((json) => {
          setCoins(json)
          setLoading(false);
        }));
  }, [])

  return (

    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading.....</strong>
        : <select onChange={onChange}>       {/*coin 은 coins배열 안에 각각 코인 */}
          {coins.map((coin) => (
            <option>
              {coins.name}({coin.symbol}):${coin.quotes.USD.price} USD
            </option>
          ))};
        </select>}
      <form onSubmit={onSubmit}>
        <input type="number" placeholder="write us dollarss" />
        <button>change coins</button>
      </form>
      <h2>you can change {result} coins!</h2>

    </div>
  );
}

export default App;
