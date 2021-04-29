import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Header = ({ hasBackButton, title }) => (
  <header className="w-full">
    <div className="flex items-center w-25">
      <button type="button" className={classNames("bg-opacity-0", "mr-4", !hasBackButton && "invisible")}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.30424 1L1.36474 8.78658L9.15132 15.7261" stroke="#525252" strokeWidth="1.5" />
        </svg>
      </button>
      <span className="text-base font-medium">{title}</span>
    </div>
  </header>
);

Header.propTypes = {
  hasBackButton: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "",
};

export default Header;
