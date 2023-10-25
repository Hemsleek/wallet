import { walletTabData } from "../../../constantData";
import "./WalletTab.scss";

type Tab = (typeof walletTabData)[number];
const WalletTab = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: Tab) => void;
}) => {
  const handleTabClick = (tab: Tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  return (
    <div className="WalletTab">
      {walletTabData.map((tab, tabIndex) => {
        const isActiveTab = activeTab === tab;
        return (
          <div
            onClick={() => {
              handleTabClick(tab);
            }}
            key={`wallet-tab${tabIndex}`}
            className={`tab ${isActiveTab && "active"}`}
          >
            <span>{tab}</span>
          </div>
        );
      })}
    </div>
  );
};

export default WalletTab;
