import "./index.scss";
import InputContainer from "../elements/InputContainer";
import { InputContents } from "../elements/InputContents";
import { useRef } from "react";

const CardNumberInput = () => {
  const itemRef = useRef([]);
  const autoFocus = (e) => {
    if (e.target.value.length >= 4) {
      e.target.value = e.target.value.substring(0, 4);
      const currentIndex = itemRef.current.indexOf(e.target);
      itemRef.current[Math.min(currentIndex + 1, 3)].focus();
    }
  };

  return (
    <div>
      <InputContainer labelName={"카드번호"} classList={[""]}>
        <InputContents
          onChange={autoFocus}
          type="number"
          ref={(el) => (itemRef.current[0] = el)}
        />
        -
        <InputContents
          onChange={autoFocus}
          ref={(el) => (itemRef.current[1] = el)}
          type="number"
        />
        -
        <InputContents
          onChange={autoFocus}
          ref={(el) => (itemRef.current[2] = el)}
          type="password"
          maxLength="4"
        />
        -
        <InputContents
          onChange={autoFocus}
          ref={(el) => (itemRef.current[3] = el)}
          type="password"
          maxLength="4"
        />
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
