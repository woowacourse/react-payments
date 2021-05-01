import React from "react";
import PropTypes from "prop-types";
import { LENGTH } from "../../utils";

const formatOwnerName = name =>
  name.length <= LENGTH.DISPLAYED_OWNER_NAME_MAX ? name : `${name.slice(0, LENGTH.DISPLAYED_OWNER_NAME_MAX)}...`;

const formatNumber = (type, value) => (type === "password" ? "*".repeat(value.length) : value);

const CardInfo = ({ bank, numberInfos, ownerName, expirationDate }) => (
  <>
    <div className="mb-4 h-4 text-custom-darkgray text-xs">{bank}</div>
    <div className="mb-2 w-10 h-6.5 bg-custom-gold rounded" />
    <div className="flex flex-col items-center text-custom-gray-300">
      <div className="flex h-5 text-sm space-x-2.5">
        {numberInfos.map(({ id, type, value }) => (
          <span key={id}>{formatNumber(type, value)}</span>
        ))}
      </div>
      <div className="flex justify-between w-11/12 text-sm">
        <span>{formatOwnerName(ownerName) || "NAME"}</span>
        <span>{expirationDate || "MM/YY"}</span>
      </div>
    </div>
  </>
);

CardInfo.propTypes = {
  bank: PropTypes.string.isRequired,
  numberInfos: PropTypes.arrayOf(PropTypes.object).isRequired,
  ownerName: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
};

export default CardInfo;
