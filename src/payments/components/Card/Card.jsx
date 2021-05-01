import React from "react";
import CardShape from "./CardShape";
import CardInfo from "./CardInfo";

const Card = props => {
  const { backgroundColor, scale, isRegistered, bank, numberInfos, ownerName, expirationDate, onClick } = props;

  return (
    <CardShape {...{ backgroundColor, scale, isRegistered, onClick }}>
      <CardInfo {...{ bank, numberInfos, ownerName, expirationDate }} />
    </CardShape>
  );
};

Card.propTypes = {
  ...CardShape.propTypes,
  ...CardInfo.propTypes,
};

export default Card;
