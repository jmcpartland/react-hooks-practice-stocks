import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addToPortfolio }) {
  
  return (
    <div>
      <h2>Stocks</h2>
        {stocks.map((stock) => <Stock key={stock.id} stock={stock} addToPortfolio={addToPortfolio} />)}
    </div>
  );
}

export default StockContainer;
