import React from "react";
import PropTypes from "prop-types";

const ToolTip = ({ isVisible, children }) =>
  isVisible && (
    <div className="flex items-center h-11">
      <span className="left-arrow w-0 h-0 border-8 border-custom-darkgray" />
      <span className="p-2 text-custom-white text-xs bg-custom-darkgray rounded-lg">{children}</span>
    </div>
  );

ToolTip.propTypes = {
  isVisible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ToolTip.defaultProps = {
  isVisible: false,
};

export default ToolTip;
