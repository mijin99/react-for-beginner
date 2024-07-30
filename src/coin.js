import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selCoins, setSelCoins] = useState("0");
  const [result, setResult] = useState("0");
  const [myMoney,setMyMoney] =useState("0");
  
  const onInput = (event) => {
    setMyMoney(event.target.value);
  }
  const onChange = (event) => {
     const selectedCoin = coins[event.target.selectedIndex].quotes.USD.price; //coins.find((coin)=>coin.id===event.target.value);
     //const symbol =coins[e.tartget.selectedIndex-1].symbol;
     setSelCoins(parseFloat(selectedCoin));
     
      console.log(selectedCoin);
  }
  const onSubmit=(event)=>{ 
    event.preventDefault();
    setResult ( myMoney /selCoins);
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
          {coins.map((coin,index) => (
            <option key={index}>
              {coins.name}({coin.symbol}):${coin.quotes.USD.price} USD
            </option>
          ))};
        </select>}
      <form onSubmit={onSubmit}>
        <input onChange={onInput} value ={myMoney} type="number" placeholder="write us dollars" />
        <button>change coins</button>
      </form>
      <h2>you can change {result} coins!</h2>

    </div>
  );
}

export default App;
