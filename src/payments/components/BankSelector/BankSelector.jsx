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
  <div className="grid-cols-4	w-full grid mx-auto p-6 max-w-lg h-56 bg-custom-white rounded-t-md">
    {bankInfos.map(({ backgroundColor, name }) => (
      <Bank key={name} {...{ backgroundColor, name, onClick }} />
    ))}
  </div>
);

BankSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BankSelector;
