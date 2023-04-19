import { ChangeEvent } from "react";
import { validateCardNumber } from "../../../validation/cardNumber";
import Input from "../../common/Input";

import "./cardNumber.css";

interface Props {
  setCardNumber?: React.Dispatch<React.SetStateAction<number[]>>;
  setError?: React.Dispatch<React.SetStateAction<boolean>>;
}

// 각 인풋창에서 change event발생 시 일어나는 일들
const onChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
  validateCardNumber(e.target.value);
};

export default function CardNumber(props: Props) {
  // 입력이 완료된 값을 state 변경해서 카드 이미지에 넘버를 넘겨주는 함수
  const { setCardNumber } = props;

  return (
    <>
      <Input
        className="first input-card-number"
        type="number"
        inputMode="numeric"
        onChange={onChangeCardNumber}
        placeholder="X X X X"
      />
      <Input
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={onChangeCardNumber}
        placeholder="X X X X"
      />
      <Input
        className=" input-card-number"
        type="password"
        inputMode="numeric"
        onChange={onChangeCardNumber}
        placeholder="X X X X"
      />
      <Input
        className="last input-card-number"
        type="number"
        inputMode="numeric"
        onChange={onChangeCardNumber}
        placeholder="X X X X"
      />
    </>
  );
}
