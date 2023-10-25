import { ReactElement } from "react";
import "./BuySellCard.scss";

const BuySellCard = ({
  label = "",
  children,
}: {
  label: string;
  children?: ReactElement;
}) => {
  return (
    <div className="BuySellCard">
      {children}
      <span className="label">{label}</span>
    </div>
  );
};

export default BuySellCard;
