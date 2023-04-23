import styled from 'styled-components';
import Input from '../../common/Input';
import { UseInputProps } from '../../../hooks/useInput';

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
        isNumber={true}
        maxLength={4}
        id="cardNumber"
        type="text"
        required
        textAlign="center"
        autoFocus
        tabIndex={0}
        {...firstNumber}
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="text"
        required
        tabIndex={1}
        textAlign="center"
        {...secondNumber}
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="password"
        required
        textAlign="center"
        autoComplete="off"
        tabIndex={2}
        {...thirdNumber}
      />
      <Dash>-</Dash>
      <Input
        isNumber={true}
        maxLength={4}
        type="password"
        autoComplete="off"
        required
        textAlign="center"
        tabIndex={3}
        {...fourthNumber}
      />
    </Wrapper>
  );
}
