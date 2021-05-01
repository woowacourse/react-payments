import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Bank = ({ backgroundColor, name, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleBankClick = () => onClick(backgroundColor, name);

  return (
    <button
      type="button"
      className={classNames(
        "flex flex-col items-center justify-center cursor-pointer select-none",
        isHovered && "outline-none"
      )}
      onKeyUp={handleBankClick}
      onClick={handleBankClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={classNames("mb-2.5 w-9 h-9 rounded-full", backgroundColor, isHovered && "bg-opacity-70 shadow-lg")}
      />
      <div className={classNames("text-custom-gray-300 text-xs ", isHovered ? "font-semibold" : "font-medium")}>
        {name}
      </div>
    </button>
  );
};

Bank.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Bank;
