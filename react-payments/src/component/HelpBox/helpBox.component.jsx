import "./helpBox.css";
import { useState } from "react";

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
      {isShown && (
        <div className="help-modal">카드 뒷면의 3자리 숫자를 입력해주세요.</div>
      )}
    </div>
  );
};

export default HelpBox;
