import { useState } from "react";
import CoinCurrencyIcon from "../../molecules/CoinCurrencyIcon";

import "./CoinCard.scss";

const CoinCard = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((currentValue) => !currentValue);
  };

  return (
    <div className="CoinCard">
      <div className="coin-details">
        <div className="coin-logo-name">
          <CoinCurrencyIcon bg="linear-gradient(0deg, #ff8f17 0%, #ffc743 100%)">
            <img
              src="/vectors/btc.svg"
              alt="btc-icon"
              className="fiat-crypto-size"
            />
          </CoinCurrencyIcon>
          <span>Bitcoin</span>
        </div>
        <span className="coin-shotname">BTC</span>
      </div>

      <div className="balance-metrics">
        <span className="balance">3.529020 BTC</span>
        <div className="usd-wrapper">
          <span className="balance-usd">$19.153 USD</span>
          <div className="metric">
            <span>-2.32%</span>
          </div>
        </div>
      </div>
      <div
        className={`caret-wrapper ${showMore ? "opened" : ""}`}
        onClick={handleShowMore}
      >
        <img src="/vectors/caret-down.svg" alt="caret-down-icon" />
      </div>
      <div className={`button-wrapper ${showMore ? "" : "hide"}`}>
        <button className="buy">Buy</button>
        <button className="sell">Sell</button>
      </div>
    </div>
  );
};

export default CoinCard;
