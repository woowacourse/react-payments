import React from "react";
import CardShape from "./CardShape";
import CardInfo from "./CardInfo";

const Card = props => {
  const { scale, isRegistered, bank, backgroundColor, cardNumbers, expirationDate, ownerName, onClick } = props;

  return (
    <CardShape {...{ backgroundColor, scale, isRegistered, onClick }}>
      <CardInfo {...{ bank, cardNumbers, ownerName, expirationDate }} />
    </CardShape>
  );
};

Card.propTypes = {
  ...CardShape.propTypes,
  ...CardInfo.propTypes,
};

export default Card;
