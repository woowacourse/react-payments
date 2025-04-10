import { useState, useRef } from "react";
import styled from "styled-components";
import InputNum from "./Input/InputNum";
import Validator from "../utils/Validator";

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  values: string[];
  onChange: (value: string, position: number) => void;
}

// 기능구현

// 기본

// 인풋 4개 중 하나에 onFocus가 되면 gray->black radius를 바꾼다
// onFocus 끝나면 다시 black -> gray

// onFocus된 인풋태그라면 거기에 입력이 될텐데, 입력의 타입이 자연수 아닐때는 입력을 차단한다 (이 때 검사는 Validator.ts) 및 빨간 경고문
// string 타입이기 때문에 들어오는 끝 글자만 하면 된다. 앞에 숫자가 있다면 이미 validator에 통과한 것이기 때문에

function CardInputNumber({ values, onChange }: Props) {
  const INPUT_COUNT = 4;
  const FIRST_INDEX = 0;
  const SECOND_INDEX = 1;
  const THIRD_INDEX = 2;
  const FOURTH_INDEX = 3;

  const [isError, setIsError] = useState(Array(INPUT_COUNT).fill(false));
  const [isFocusedNums, setIsFocusedNums] = useState(Array(INPUT_COUNT).fill(false));
  const [redLine, setRedLine] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const lastWord = e.target.value.slice(-1);
    if (!Validator.isNumber(lastWord)) {
      setRedLine(true);
      const newRedRadius = isError.map((_, i) => index === i);
      setIsError(newRedRadius);
      return;
    }
    
    setRedLine(false);
    setIsError(Array(INPUT_COUNT).fill(false));
    onChange(e.target.value, index);

    // 4자리 입력이 완료되면 다음 입력 필드로 포커스 이동
    if (e.target.value.length === 4 && index < INPUT_COUNT - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const focusChange = (index: number) => {
    const newFocused = isFocusedNums.map((_, i) => i === index);
    setIsFocusedNums(newFocused);
  };

  const blurChange = () => {
    const newFocused = Array(4).fill(false);
    setIsFocusedNums(newFocused);
  };

  return (
    <div>
      <h2>결제할 카드 번호를 입력해 주세요</h2>
      <p>본인 명의의 카드만 결제 가능합니다.</p>
      <p>카드 번호</p>
      <InputGroup>
        <InputNum
          value={values[FIRST_INDEX]}
          index={FIRST_INDEX}
          onFocus={(index) => focusChange(index)}
          onBlur={() => blurChange()}
          onChange={(index, e) => handleChange(index, e)}
          isFocus={isFocusedNums[FIRST_INDEX]}
          isError={isError[FIRST_INDEX]}
          inputRef={inputRefs[FIRST_INDEX]}
        />
        <InputNum
          value={values[SECOND_INDEX]}
          index={SECOND_INDEX}
          onFocus={(index) => focusChange(index)}
          onBlur={() => blurChange()}
          onChange={(index, e) => handleChange(index, e)}
          isFocus={isFocusedNums[SECOND_INDEX]}
          isError={isError[SECOND_INDEX]}
          inputRef={inputRefs[SECOND_INDEX]}
        />
        <InputNum
          value={values[THIRD_INDEX]}
          index={THIRD_INDEX}
          onFocus={(index) => focusChange(index)}
          onBlur={() => blurChange()}
          onChange={(index, e) => handleChange(index, e)}
          isFocus={isFocusedNums[THIRD_INDEX]}
          isError={isError[THIRD_INDEX]}
          inputRef={inputRefs[THIRD_INDEX]}
        />
        <InputNum
          value={values[FOURTH_INDEX]}
          index={FOURTH_INDEX}
          onFocus={(index) => focusChange(index)}
          onBlur={() => blurChange()}
          onChange={(index, e) => handleChange(index, e)}
          isFocus={isFocusedNums[FOURTH_INDEX]}
          isError={isError[FOURTH_INDEX]}
          inputRef={inputRefs[FOURTH_INDEX]}
        />
      </InputGroup>
      <h5 style={{ color: "red", display: redLine ? "block" : "none" }}>
        숫자만 입력 가능합니다
      </h5>
    </div>
  );
}

export default CardInputNumber;
