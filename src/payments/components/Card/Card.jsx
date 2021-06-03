import React from "react";
import CardShape from "./CardShape";
import CardInfo from "./CardInfo";
import { LENGTH } from "../../utils";
import { cardNumberInfos } from "../CardAddForm/inputInfos";

const formatOwnerName = name =>
  name.length <= LENGTH.DISPLAYED_OWNER_NAME_MAX ? name : `${name.slice(0, LENGTH.DISPLAYED_OWNER_NAME_MAX)}...`;

const Card = props => {
  const { scale, isRegistered, bank, backgroundColor, cardNumbers, expirationDate, ownerName, onClick } = props;

  const formattedCardNumbers = cardNumberInfos.map(({ type }, index) =>
    type === "password" ? "*".repeat(cardNumbers[index]?.length) : cardNumbers[index]
  );

  return (
    <CardShape {...{ backgroundColor, scale, isRegistered, onClick }}>
      <CardInfo
        {...{ bank, cardNumbers: formattedCardNumbers, ownerName: formatOwnerName(ownerName), expirationDate }}
      />
    </CardShape>
  );
};

Card.propTypes = {
  ...CardShape.propTypes,
  ...CardInfo.propTypes,
};

export default Card;
