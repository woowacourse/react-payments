import React from "react";
import { getId } from "../../../@shared/utils";
import CardShape from "./CardShape";

const CardInfo = props => (
  <>
    <div className="text-xs text-custom-darkgray mb-4 h-4">{props.bank}</div>
    <div className="w-10 h-6.5 bg-custom-gold rounded mb-2"></div>
    <div className="flex flex-col text-custom-gray-300 items-center">
      <div className="flex space-x-2.5 text-sm h-5">
        {props.numbers?.map(number => (
          <span key={getId()}>{number}</span>
        ))}
      </div>
      <div className="text-sm w-11/12 flex justify-between">
        <span>{props.ownerName}</span>
        <span>{props.expirationDate}</span>
      </div>
    </div>
  </>
);

const Card = props => {
  const {
    backgroundColor = "bg-custom-gray-200",
    width = "w-52",
    height = "h-32",
    isRegistered = false,
    bank,
    numbers,
    ownerName = "NAME",
    expirationDate = "MM/YY",
  } = props;
  const cardShapeProps = { backgroundColor, width, height, isRegistered };
  const cardInfoProps = { bank, numbers, ownerName, expirationDate };

  return (
    <CardShape {...cardShapeProps}>
      <CardInfo {...cardInfoProps} />
    </CardShape>
  );
};

export default Card;
