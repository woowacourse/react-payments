import React from "react";
import PropTypes from "prop-types";
import Bank from "../Bank/Bank";

const bankInfos = [
  { backgroundColor: "bg-custom-red", name: "국민" },
  { backgroundColor: "bg-custom-blue", name: "삼성" },
  { backgroundColor: "bg-custom-green", name: "농협" },
  { backgroundColor: "bg-custom-purple", name: "BC" },
  { backgroundColor: "bg-custom-gradient-mint", name: "배민" },
  { backgroundColor: "bg-custom-pink", name: "신한" },
  { backgroundColor: "bg-custom-orange", name: "제주" },
  { backgroundColor: "bg-custom-yellow", name: "카카오" },
];

const BankSelector = ({ onClick }) => (
  <div className="absolute z-20 bottom-0 left-0 flex items-center justify-center w-full h-56 bg-custom-white rounded-t-md">
    <div className="flex flex-wrap gap-y-6 m-auto">
      {bankInfos.map(({ backgroundColor, name }) => (
        <Bank key={name} {...{ backgroundColor, name, onClick }} />
      ))}
    </div>
  </div>
);

BankSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BankSelector;
