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

  getYesterdaysClose: (ticker, lastTradingDate, callback) => {
    if (lastTradingDate != "" && lastTradingDate != undefined) {
      const url = stock.yesterdaysCloseURL(ticker, lastTradingDate);
      fetch(url)
        .then((response) => response.json())
        .then((data) => callback(stock.formatPriceData(data)));
    }
  },

  getLastTradingDate: async () => {
    const today = new Date().toISOString().split("T")[0];
    const url = `${iex.base_url}/REF_DATA_DATES/holiday/last/?token=${iex.api_token}`;
    return fetch(url).then((res) => res.json());
  },

  yesterdaysCloseURL: (ticker, lastTradingDate) => {
    return `${iex.base_url}/HISTORICAL_PRICES/${ticker}?token=${iex.api_token}&from=2023-03-01&to=${lastTradingDate}`;
  },
};
