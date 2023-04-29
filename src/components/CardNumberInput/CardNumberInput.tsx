import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import Label from '../Label';

type CardNumberInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>[];
};

const CardNumberInput = ({ onChange }: CardNumberInputProps) => {
  const [onFirstChange, onSecondChange, onThirdChange, onFourthChange] = onChange;

  return (
    <p>
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
          onChange={onFirstChange}
        />
        <Dash />
        <Input
          type="text"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={onSecondChange}
        />
        <Dash />
        <Input
          type="password"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
          onChange={onThirdChange}
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
        />
      </Styled.Box>
    </p>
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
