import React from "react";
import { getId } from "../../../@shared/utils";
import CardShape from "./CardShape";

const CardInfo = props => (
  <>
    <div className="text-xs text-font-darkgray mb-4 h-4">{props.bank}</div>
    <div className="w-10 h-6.5 bg-chip-gold rounded mb-2"></div>
    <div className="flex flex-col items-center">
      <div className="flex space-x-2.5 text-font-gray text-sm h-5">
        {props.numbers?.map(number => (
          <span key={getId()}>{number}</span>
        ))}
      </div>
      <div className="text-font-gray text-sm w-11/12 flex justify-between">
        <span>{props.ownerName}</span>
        <span>{props.expirationDate}</span>
      </div>
    </div>
  </>
);

const Card = props => {
  const { backgroundColor, width, height, isRegistered, bank, numbers, ownerName, expirationDate } = props;
  const cardShapeProps = { backgroundColor, width, height, isRegistered };
  const cardInfoProps = { bank, numbers, ownerName, expirationDate };

  return (
    <CardShape {...cardShapeProps}>
      <CardInfo {...cardInfoProps} />
    </CardShape>
  );
};

export default Card;
