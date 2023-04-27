import styled from 'styled-components';
import Input from '../../common/Input';
import { UseInputProps } from '../../../hooks/useInput';
import Error from '../../common/Error';
import { TAB_INDEX_INFO } from '../../../constant';

interface CardNumberInputProps {
  firstNumber: UseInputProps;
  secondNumber: UseInputProps;
  thirdNumber: UseInputProps;
  fourthNumber: UseInputProps;
}

const { addCardPage } = TAB_INDEX_INFO;

export default function CardNumberInput({
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
}: CardNumberInputProps) {
  return (
    <Container>
      <Wrapper>
        <Input
          isNumber={true}
          maxLength={4}
          id="cardNumber"
          type="text"
          required
          textAlign="center"
          placeholder="0000"
          autoComplete="off"
          tabIndex={addCardPage.firstCardNumber}
          {...firstNumber}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          maxLength={4}
          type="text"
          required
          placeholder="0000"
          tabIndex={addCardPage.secondCardNumber}
          autoComplete="off"
          textAlign="center"
          {...secondNumber}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          type="text"
          maxLength={4}
          placeholder="0000"
          isPassword={true}
          required
          textAlign="center"
          autoComplete="off"
          tabIndex={addCardPage.thirdCardNumber}
          {...thirdNumber}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          maxLength={4}
          type="text"
          placeholder="0000"
          autoComplete="off"
          isPassword={true}
          required
          textAlign="center"
          tabIndex={addCardPage.fourthCardNumber}
          {...fourthNumber}
        />
      </Wrapper>
      {firstNumber.error && <Error text={firstNumber.error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

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
