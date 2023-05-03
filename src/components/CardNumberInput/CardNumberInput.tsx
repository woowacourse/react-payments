import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import { Label } from '../Label';
import useAutoFocus from '../../hooks/useAutoFocus';

type CardNumberInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>[];
};

const CardNumberInput = ({ onChange }: CardNumberInputProps) => {
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
