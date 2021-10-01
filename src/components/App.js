import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  var [stockIntialPrice, setInitialPrice] = useState("");
  var [stockQuantity, setStockQuantity] = useState("");
  var [stockCurrentPrice, setStockCurrentPrice] = useState("");
  var [output, setOutput] = useState("");

  const calculateProfitOrLoss = () => {
    var quantity = parseInt(stockQuantity);
    var currentPrice = parseInt(stockCurrentPrice);
    var initialPrice = parseInt(stockIntialPrice);
    if (
      quantity < 0 ||
      currentPrice < 0 ||
      initialPrice < 0 ||
      Number.isNaN(quantity) ||
      Number.isNaN(currentPrice) ||
      Number.isNaN(initialPrice)
    ) {
      setOutput("Please provide valid inputs");
    } else {
      var stockResult = currentPrice * quantity - initialPrice * quantity;
      var actualResult = initialPrice * quantity;
      if (stockResult == 0) {
        setOutput("No pain no gain and no gain no pain");
      } else if (stockResult > 0) {
        var profitPercent =
          parseInt(stockResult * 100) / parseInt(actualResult);
        setOutput(
          "Hey, the profit is " +
            stockResult +
            " and the percent is " +
            profitPercent
        );
      } else {
        var loss = Math.abs(stockResult);
        var lossPercent = parseInt(loss * 100) / parseInt(actualResult);
        setOutput(
          "Hey, the loss is " + loss + " and the percent is " + lossPercent
        );
      }
    }
  };
  return (
    <React.Fragment>
      <div className="profit-loss">
        <h1>Stock Profile & Loss Calculator</h1>
        <label className="input-label" for="initial-price">
          <p>Intial Price</p>
        </label>
        <input
          type="number"
          className="input-text"
          name="initial-price"
          min="0"
          onChange={(event) => setInitialPrice(event.target.value)}
        ></input>
        <label className="input-label" for="stock-quantity">
          <p>Quantity of Stocks</p>
        </label>
        <input
          type="number"
          className="input-text"
          name="stock-quantity"
          min="0"
          onChange={(event) => setStockQuantity(event.target.value)}
        ></input>
        <label className="input-label" for="stock-current-price">
          <p>Current Price</p>
        </label>
        <input
          type="number"
          className="input-text"
          name="stock-current-price"
          min="0"
          onChange={(event) => setStockCurrentPrice(event.target.value)}
        ></input>
        <button className="btn-check" onClick={() => calculateProfitOrLoss()}>
          Tell Me!!
        </button>
        <h2>{output}</h2>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
