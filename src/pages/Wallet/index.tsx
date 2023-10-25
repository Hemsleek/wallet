import { useState } from "react";
import BuySellCard from "../../components/molecules/BuySellCard";
import CoinCurrencyIcon from "../../components/molecules/CoinCurrencyIcon";
import WalletTab from "../../components/molecules/WalletTab";
import CoinCard from "../../components/organisms/CoinCard";
import PageLayout from "../../components/organisms/PageLayout";
import WalletGraph from "../../components/organisms/WalletGraph";

import "./Wallet.scss";
import { walletTabData } from "../../constantData";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState<(typeof walletTabData)[number]>(
    walletTabData[0]
  );
  return (
    <PageLayout pageTitle="bitcoin wallet">
      <div className="Wallet">
        <CoinCard />
        <div className="wallet-tab-wrapper">
          <WalletTab activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="graph-wrapper">
          <WalletGraph />
        </div>
        <div className="buy-sell">
          <BuySellCard label="Buy BTC">
            <CoinCurrencyIcon bg="linear-gradient(0deg, #1d71f1 0%, #17c7fb 100%)">
              <img
                src="/vectors/dollar.svg"
                alt="dollar-icon"
                className="fiat-crypto-size"
              />
            </CoinCurrencyIcon>
          </BuySellCard>
          <BuySellCard label="Sell BTC">
            <CoinCurrencyIcon bg="linear-gradient(0deg, #fa23a2 0%, #ff677c 100%)">
              <img
                src="/vectors/dollar.svg"
                alt="dollar-icon"
                className="fiat-crypto-size"
              />
            </CoinCurrencyIcon>
          </BuySellCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default Wallet;
