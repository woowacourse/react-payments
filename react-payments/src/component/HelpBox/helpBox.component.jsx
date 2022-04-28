import "./helpBox.css";
import { useState } from "react";
import { HELP_MESSAGE } from "../../constants";

const HelpBox = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="help-box-container">
      <div
        className="help-box"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        ?
      </div>
      {isShown && <div className="help-modal">{HELP_MESSAGE}</div>}
    </div>
  );
};

export default HelpBox;
