import styled from 'styled-components';
import Input from '../../common/Input';
import { UseInputProps } from '../../../hooks/useInput';
import Error from '../../common/Error';
import { ADD_CARD_PAGE_TAB_INDEX } from '../../../constant';

interface CardNumberInputProps {
  firstNumber: UseInputProps;
  secondNumber: UseInputProps;
  thirdNumber: UseInputProps;
  fourthNumber: UseInputProps;
}

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
          autoFocus
          placeholder="0000"
          autoComplete="off"
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.firstCardNumber}
          {...firstNumber}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          maxLength={4}
          type="text"
          required
          placeholder="0000"
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.secondCardNumber}
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
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.thirdCardNumber}
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
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.fourthCardNumber}
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
