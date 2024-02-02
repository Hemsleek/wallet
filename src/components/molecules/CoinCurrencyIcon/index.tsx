import { ReactElement } from "react";

import "./CoinCurrencyIcon.scss";

const CoinCurrencyIcon = ({
  children,
  bg = "transparent",
  borderColor = "transparent",
}: {
  children: ReactElement;
  bg?: string;
  borderColor?: string;
}) => {
  return (
    <div
      style={{
        background: bg,
        borderColor,
        borderWidth: 0,
        borderStyle: "solid",
      }}
      className="CoinCurrencyIcon"
    >
      {children}
    </div>
  );
};

export default CoinCurrencyIcon;
