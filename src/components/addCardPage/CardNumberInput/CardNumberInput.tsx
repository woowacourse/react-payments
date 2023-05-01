import styled from 'styled-components';
import { UseInputProps } from '../../../hooks/useInput';
import { TAB_INDEX_INFO } from '../../../constant';
import { Input } from '../../common/Input';
import { Error } from '../../common/Error';

interface CardNumberInputProps {
  firstNumberInformation: UseInputProps;
  secondNumberInformation: UseInputProps;
  thirdNumberInformation: UseInputProps;
  fourthNumberInformation: UseInputProps;
}

const { addCardPage } = TAB_INDEX_INFO;

export default function CardNumberInput({
  firstNumberInformation,
  secondNumberInformation,
  thirdNumberInformation,
  fourthNumberInformation,
}: CardNumberInputProps) {
  return (
    <Container>
      <Wrapper>
        <Input
          isNumber={true}
          id="cardNumber"
          type="text"
          textAlign="center"
          placeholder="0000"
          autoComplete="off"
          tabIndex={addCardPage.firstCardNumber}
          {...firstNumberInformation}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          type="text"
          placeholder="0000"
          tabIndex={addCardPage.secondCardNumber}
          autoComplete="off"
          textAlign="center"
          {...secondNumberInformation}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          type="text"
          placeholder="0000"
          isPassword={true}
          textAlign="center"
          autoComplete="off"
          tabIndex={addCardPage.thirdCardNumber}
          {...thirdNumberInformation}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          type="text"
          placeholder="0000"
          autoComplete="off"
          isPassword={true}
          textAlign="center"
          tabIndex={addCardPage.fourthCardNumber}
          {...fourthNumberInformation}
        />
      </Wrapper>
      {firstNumberInformation.error && (
        <Error text={firstNumberInformation.error} />
      )}
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
