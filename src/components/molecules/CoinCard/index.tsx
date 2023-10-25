import "./CoinCard.scss";

const CoinCard = ({
  label = "",
  currency,
}: {
  label: string;
  currency: string;
}) => {
  return (
    <div className="CoinCard">
      <img src={`/vectors/${currency}`} alt="currency-icon" />
      <span className="label">{label}</span>
    </div>
  );
};

export default CoinCard;
