import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Bank = ({ backgroundColor, name, onClick }) => {
  const handleBankClick = () => onClick(backgroundColor, name);

  return (
    <div
      className="flex flex-col items-center w-1/4 cursor-pointer"
      tabIndex="0"
      onKeyUp={handleBankClick}
      onClick={handleBankClick}
      role="button"
    >
      <div className={classNames("mb-2.5 w-9 h-9 rounded-full", backgroundColor)} />
      <div className="text-custom-gray-300 text-xs font-medium">{name}</div>
    </div>
  );
};

Bank.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Bank;
