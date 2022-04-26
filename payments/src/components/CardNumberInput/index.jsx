import "./index.scss";
import InputContainer from "../elements/InputContainer";
import { InputContents } from "../elements/InputContents";
import { useCallback, useRef } from "react";

const CardNumberInput = () => {
  const itemRef = useRef([]);

  const onChange = useCallback((e) => {
    const limitInputLength = (e) => {
      e.target.value = e.target.value.substring(0, 4);
    };

    const autoFocus = (e) => {
      const currentIndex = itemRef.current.indexOf(e.target);
      itemRef.current[Math.min(currentIndex + 1, 3)].focus();
    };

    if (e.target.value.length >= 4) {
      limitInputLength(e);
      autoFocus(e);
    }
  }, []);

  return (
    <div>
      <InputContainer labelName={"카드번호"} classList={[""]}>
        <InputContents
          onChange={onChange}
          type="number"
          ref={(el) => (itemRef.current[0] = el)}
        />
        -
        <InputContents
          onChange={onChange}
          ref={(el) => (itemRef.current[1] = el)}
          type="number"
        />
        -
        <InputContents
          onChange={onChange}
          ref={(el) => (itemRef.current[2] = el)}
          type="password"
          maxLength="4"
        />
        -
        <InputContents
          onChange={onChange}
          ref={(el) => (itemRef.current[3] = el)}
          type="password"
          maxLength="4"
        />
      </InputContainer>
    </div>
  );
};

export default CardNumberInput;
