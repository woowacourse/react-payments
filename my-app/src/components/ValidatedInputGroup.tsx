// ValidatedInputGroup.tsx
import { css } from "@emotion/react";
import InputGroup from "./inputGroup";

import { useState } from "react";
import type { ContainerMode } from "./container.tsx";
import { decideBrandName } from "../utils/decideBrandName.ts";

const INPUT_FIELD_COUNT = {
  CARD: 4,
  EXP: 2,
  CVC: 1,
};

const ValidatedInputGroup = ({ mode, onValueHandler }: ContainerMode) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValues, setInputValues] = useState<string[]>([]);
  const inputFieldCount = INPUT_FIELD_COUNT[mode];

  const handleInputChange = (index: number, value: string) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
    setErrorMessage("");

    onValueHandler(newValues);
  };

  const validate = () => {
    if (!/^\d+$/.test(inputValues.join(""))) {
      setErrorMessage("숫자만 입력 가능합니다");
      return;
    }

    if (mode === "CARD") {
      const firstNumber = inputValues[0];
      const brandName = decideBrandName(firstNumber);

      if (brandName === "") {
        setErrorMessage("이 카드 브랜드는 지원되지 않습니다.");
        return;
      }
    }

    // 2. 숫자 01 부터 12 까지 허용해야한다.
    if (mode === "EXP") {
      const month = inputValues[0];
      if (!/^(0[1-9]|1[0-2])$/.test(month)) {
        setErrorMessage("유효하지 않은 날짜입니다.");
      }
    }
  };

  const maxlength = () => {
    if (mode === "CARD") {
      return 4;
    }
    if (mode === "EXP") {
      return 2;
    }
    return 3;
  };

  return (
    <>
      <InputGroup
        values={inputValues}
        onChange={handleInputChange}
        onBlur={validate}
        count={inputFieldCount}
        maxLength={maxlength()}
      />
      <span
        css={css`
          font-size: 9.5px;
          font-weight: 400;
          color: #ff3d3d;
          display: ${errorMessage ? "block" : "none"};
        `}
      >
        {errorMessage}
      </span>
    </>
  );
};

export default ValidatedInputGroup;
