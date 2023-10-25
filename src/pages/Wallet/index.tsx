import BuySellCard from "../../components/molecules/BuySellCard";
import CoinCurrencyIcon from "../../components/molecules/CoinCurrencyIcon";
import CoinCard from "../../components/organisms/CoinCard";
import PageLayout from "../../components/organisms/PageLayout";

import "./Wallet.scss";

const Wallet = () => {
  return (
    <PageLayout pageTitle="bitcoin wallet">
      <div className="Wallet">
        <CoinCard />
        <div className="buy-sell">
          <BuySellCard label="Buy BTC">
            <CoinCurrencyIcon bg="linear-gradient(0deg, #1d71f1 0%, #17c7fb 100%)">
              <span className="currency-fiat">$</span>
            </CoinCurrencyIcon>
          </BuySellCard>
          <BuySellCard label="Sell BTC">
            <CoinCurrencyIcon bg="linear-gradient(0deg, #fa23a2 0%, #ff677c 100%)">
              <span className="currency-fiat">$</span>
            </CoinCurrencyIcon>
          </BuySellCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default Wallet;
