import React, { useState } from "react";
import Input from "../input/Input";
import InputInfo from "../inputInfo/InputInfo";
import ErrorMessage from "../errorMessage/ErrorMessage";

const CardNumberInputField = () => {
  const [cardNumbers, setCardNumbers] = useState([0, 0, 0, 0]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const input = e.target.value;
    const newCardNumbers = [...cardNumbers];
    newCardNumbers[index] = Number(input);
    if (!Number(input) && input !== "") {
      setErrorMessage("숫자만 입력 가능합니다.");
      return;
    } else {
      setErrorMessage("");
    }
    setCardNumbers(newCardNumbers);
  };

  return (
    <>
      <InputInfo
        mainText="결제할 카드 번호를 입력해 주세요"
        subText="본인 명의의 카드만 결제 가능합니다."
      ></InputInfo>
      <form>
        {cardNumbers.map((cardNumber, index) => (
          <Input
            key={index}
            maxLength={4}
            handleChange={(e) => handleChange(e, index)}
          ></Input>
        ))}
      </form>
      {errorMessage && <ErrorMessage message={errorMessage}></ErrorMessage>}
    </>
  );
};

export default CardNumberInputField;
