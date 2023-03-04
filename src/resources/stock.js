import { iex } from "../config/iex.js";

export const stock = {
  latestPrice: (ticker, callback) => {
    fetch(stock.latestPriceURL(ticker))
      .then((response) => response.json())
      .then((data) => callback(stock.formatPriceData(data)));
  },

  latestPriceURL: (ticker) => {
    return `${iex.base_url}/INTRADAY_PRICES/${ticker}?token=${iex.api_token}`;
  },

  formatPriceData: (data) => {
    const stockData = data[data.length - 2];
    const formattedData = {};
    formattedData.price = stockData.close;
    formattedData.date = stockData.date;
    formattedData.time = stockData.label;
    return formattedData;
  },

  getYesterdaysClose: (ticker, date, callback) => {
    fetch(stock.yesterdaysCloseURL(ticker, date))
      .then((response) => response.json())
      .then((data) => callback(stock.formatPriceData(data)));
  },

  yesterdaysCloseURL: (ticker) => {
    return `${iex.base_url}/HISTORICAL_PRICES/${ticker}?token=${iex.api_token}&from=2023-03-01&to=2023-03-02`;
  },
};
