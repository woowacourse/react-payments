import React from "react";
import PropTypes from "prop-types";
import { LENGTH } from "../../utils";

const formatOwnerName = name =>
  name.length <= LENGTH.DISPLAYED_OWNER_NAME_MAX ? name : `${name.slice(0, LENGTH.DISPLAYED_OWNER_NAME_MAX)}...`;

const CardInfo = ({ bank, cardNumbers, ownerName, expirationDate }) => {
  const [expirationMonth, expirationYear] = expirationDate ?? ["MM", "YY"];

  return (
    <>
      <div className="mb-4 h-4 text-custom-darkgray text-xs">{bank}</div>
      <div className="mb-2 w-10 h-6.5 bg-custom-gold rounded" />
      <div className="flex flex-col items-center text-custom-gray-300">
        <div className="flex h-5 text-sm space-x-2.5">
          {cardNumbers.map((number, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index}> {number}</span>
          ))}
        </div>
        <div className="flex justify-between w-11/12 text-sm">
          <span>{formatOwnerName(ownerName) || "NAME"}</span>
          <div className="flex">
            <span>{expirationMonth}</span>
            <span>{expirationMonth ? "/" : null}</span>
            <span>{expirationYear}</span>
          </div>
        </div>
      </div>
    </>
  );
};

CardInfo.propTypes = {
  bank: PropTypes.string.isRequired,
  cardNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
  ownerName: PropTypes.string.isRequired,
  expirationDate: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardInfo;
