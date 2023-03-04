if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import logo from "./logo.svg";
import "./main.css";

import StockRow from "./components/stockRow.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <ul>
            <StockRow ticker="AAPL" />
            <StockRow ticker="GOOG" />
            <StockRow ticker="MSFT" />
            <StockRow ticker="TSLA" />
          </ul>
        </table>
      </div>
    </div>
  );
}

export default App;
