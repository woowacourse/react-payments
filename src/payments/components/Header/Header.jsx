import classNames from "classnames";
import React from "react";

const Header = props => (
  <header className="w-full">
    <div className="w-25 flex items-center">
      <button className={classNames("bg-opacity-0", "mr-4", !props.hasBackButton && "invisible")}>
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.30424 1L1.36474 8.78658L9.15132 15.7261" stroke="#525252" strokeWidth="1.5" />
        </svg>
      </button>
      <span className="font-medium text-base">{props.title}</span>
    </div>
  </header>
);
export default Header;
