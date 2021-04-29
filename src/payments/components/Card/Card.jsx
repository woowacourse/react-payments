import React from "react";
import { LENGTH } from "../../utils";
import CardShape from "./CardShape";

const formatOwnerName = name =>
  name.length <= LENGTH.DISPLAYED_OWNER_NAME_MAX ? name : name.slice(0, LENGTH.DISPLAYED_OWNER_NAME_MAX) + "...";

const formatNumber = (type, value) => (type === "password" ? "*".repeat(value.length) : value);

const CardInfo = props => (
  <>
    <div className="mb-4 h-4 text-custom-darkgray text-xs">{props.bank}</div>
    <div className="mb-2 w-10 h-6.5 bg-custom-gold rounded"></div>
    <div className="flex flex-col items-center text-custom-gray-300">
      <div className="flex h-5 text-sm space-x-2.5">
        {props.numberInfos?.map(({ id, type, value }) => (
          <span key={id}>{formatNumber(type, value)}</span>
        ))}
      </div>
      <div className="flex justify-between w-11/12 text-sm">
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
