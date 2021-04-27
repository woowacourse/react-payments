import React from "react";
import { LENGTH } from "../../utils";
import CardShape from "./CardShape";

const formatOwnerName = name =>
  name.length <= LENGTH.DISPLAYED_OWNER_NAME_MAX ? name : name.slice(0, LENGTH.DISPLAYED_OWNER_NAME_MAX) + "...";

const formatNumber = (type, value) => (type === "password" ? "*".repeat(value.length) : value);

const CardInfo = props => (
  <>
    <div className="text-xs text-custom-darkgray mb-4 h-4">{props.bank}</div>
    <div className="w-10 h-6.5 bg-custom-gold rounded mb-2"></div>
    <div className="flex flex-col text-custom-gray-300 items-center">
      <div className="flex space-x-2.5 text-sm h-5">
        {props.numberInfos?.map(({ id, type, value }) => (
          <span key={id}>{formatNumber(type, value)}</span>
        ))}
      </div>
      <div className="text-sm w-11/12 flex justify-between">
        <span>{formatOwnerName(props.ownerName) || "NAME"}</span>
        <span>{props.expirationDate || "MM/YY"}</span>
      </div>
    </div>
  </>
);

const Card = props => {
  const { backgroundColor, scale, isRegistered, bank, numberInfos, ownerName, expirationDate, onClick } = props;
  const cardShapeProps = { backgroundColor, scale, isRegistered, onClick };
  const cardInfoProps = { bank, numberInfos, ownerName, expirationDate };

  return (
    <CardShape {...cardShapeProps}>
      <CardInfo {...cardInfoProps} />
    </CardShape>
  );
};

export default Card;
