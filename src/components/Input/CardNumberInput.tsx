import styled from "styled-components";
import { REGEX_PATTERN } from "../../constant";
import { UseInputProps } from "../../hooks/useInput";
import Input from "../common/Input";

interface CardNumberInputProps {
  firstNumber: UseInputProps;
  secondNumber: UseInputProps;
  thirdNumber: UseInputProps;
  fourthNumber: UseInputProps;
}

const Wrapper = styled.div`
  display: flex;
  background-color: #ecebf1;
  justify-content: space-between;
  height: 45px;
  border-radius: 7px;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const Dash = styled.span`
  margin: 0 7px;
`;

export default function CardNumberInput({
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
}: CardNumberInputProps) {
  return (
    <Wrapper>
      <Input
        autoFocus
        isNumber={true}
        maxLength={4}
        id="cardNumber"
        type="text"
        pattern={REGEX_PATTERN.CARD_NUMBER}
        required
        textAlign="center"
        {...firstNumber}
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="text"
        pattern={REGEX_PATTERN.CARD_NUMBER}
        required
        textAlign="center"
        {...secondNumber}
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="password"
        pattern={REGEX_PATTERN.CARD_NUMBER}
        required
        textAlign="center"
        {...thirdNumber}
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="password"
        pattern={REGEX_PATTERN.CARD_NUMBER}
        required
        textAlign="center"
        {...fourthNumber}
      />
    </Wrapper>
  );
}
