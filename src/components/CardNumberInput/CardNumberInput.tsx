import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import { Label } from '../Label';
import useAutoFocus from '../../hooks/useAutoFocus';
import type { CardInformation } from '../../domain/types/card';

type CardNumberInputProps = {
  cardNumber: CardInformation['cardNumber'];
  onChange: React.ChangeEventHandler<HTMLInputElement>[];
};

const CardNumberInput = ({ cardNumber, onChange }: CardNumberInputProps) => {
  const [onFirstChange, onSecondChange, onThirdChange, onFourthChange] = onChange;
  const { inputRefs, focusNext } = useAutoFocus(4);

  return (
    <>
      <Label htmlFor="CardNumber">카드 번호</Label>
      <Styled.Box marginTop="10px">
        <Input
          id="CardNumber"
          type="text"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={(e) => {
            onFirstChange(e);
            focusNext(0);
          }}
          autoComplete="off"
          ref={(node: HTMLInputElement) => {
            inputRefs.current[0] = node;
          }}
          value={cardNumber[0]}
        />
        <Dash />
        <Input
          type="text"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={(e) => {
            onSecondChange(e);
            focusNext(1);
          }}
          autoComplete="off"
          ref={(node: HTMLInputElement) => {
            inputRefs.current[1] = node;
          }}
          value={cardNumber[1]}
        />
        <Dash />
        <Input
          type="password"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={(e) => {
            onThirdChange(e);
            focusNext(2);
          }}
          autoComplete="off"
          ref={(node: HTMLInputElement) => {
            inputRefs.current[2] = node;
          }}
          value={cardNumber[2]}
        />
        <Dash />
        <Input
          type="password"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={onFourthChange}
          autoComplete="off"
          ref={(node: HTMLInputElement) => {
            inputRefs.current[3] = node;
          }}
          value={cardNumber[3]}
        />
      </Styled.Box>
    </>
  );
};

export default CardNumberInput;

const Box = styled(InputBox)``;

const DashWrapper = styled.div`
  width: 13px;
  color: #737373;
  text-align: center;
`;

const Styled = {
  Box,
};

export const Dash = () => {
  return <DashWrapper>-</DashWrapper>;
};
