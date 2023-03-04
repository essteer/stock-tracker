import React, { Component } from "react";
import { stock } from "../resources/stock.js";

const changeStyle = {
  color: "#4caf50",
  fontSize: "0.8rem",
  marginLeft: 5,
};

class StockRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  applyData(data) {
    this.setState({
      data: data,
    });
  }

  componentDidMount() {
    stock.latestPrice(this.props.ticker, this.applyData.bind(this));
  }

  render() {
    return (
      <li>
        <b>{this.props.ticker}</b> {this.state.data.close}
        <span style={changeStyle}>+12.34 (5.3%)</span>
      </li>
    );
  }
}

export default StockRow;
