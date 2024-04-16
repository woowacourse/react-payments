interface Props {
  cardInfo: Partial<CardInfo>;
}

const CreditCard: React.FC<Props> = ({ cardInfo: { cardNumbers, cardValidityPeriod, ownerName } }) => {
  return (
    <div>
      {cardNumbers} | {cardValidityPeriod?.month} | {cardValidityPeriod?.year} | {ownerName}
    </div>
  );
};

export default CreditCard;
