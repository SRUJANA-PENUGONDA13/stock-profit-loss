import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  var [initialPrice, setInitialPrice] = useState(0);
  var [stockQuantity, setStockQuantity] = useState(0);
  var [stockCurrentPrice, setStockCurrentPrice] = useState(0);
  var [output, setOutput] = useState("");

  const calculateProfitOrLoss = () => {
    if (stockQuantity < 0 || stockCurrentPrice < 0 || initialPrice < 0) {
      setOutput("Please provide valid inputs");
    } else {
      var stockResult =
        parseInt(stockCurrentPrice) * parseInt(stockQuantity) -
        parseInt(initialPrice) * parseInt(stockQuantity);
      if (stockResult == 0) {
        setOutput("No pain no gain and no gain no pain");
      } else if (stockResult > 0) {
        var profitPercent = (stockResult * 100) / parseInt(initialPrice);
        console.log(profitPercent);
        setOutput(
          "Hey, the profit is " +
            stockResult +
            " and the percent is " +
            profitPercent
        );
      } else {
        var loss = Math.abs(stockResult);
        var lossPercent = (loss * 100) / parseInt(initialPrice);
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
          onChange={(event) => setInitialPrice(event.target.value)}
        ></input>
        <label className="input-label" for="stock-quantity">
          <p>Quantity of Stocks</p>
        </label>
        <input
          type="number"
          className="input-text"
          name="stock-quantity"
          onChange={(event) => setStockQuantity(event.target.value)}
        ></input>
        <label className="input-label" for="stock-current-price">
          <p>Current Price</p>
        </label>
        <input
          type="number"
          className="input-text"
          name="stock-current-price"
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
