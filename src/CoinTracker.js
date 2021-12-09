import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true); //로딩화면
  const [coins, setCoins] = useState([]); //코인

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); //json = 코인개수
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins!! {loading ? "" : `(${coins.length})`} </h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

/*통과
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [Cions, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setCoins(json);
      });
  }, []);

  return (
    <div>
      <h1> {loading ? "" : `${coins.length}`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
*/

/*Test_1
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1> The Coins! ({coins.length})</h1>

      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
*/
