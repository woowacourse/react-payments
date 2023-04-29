import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import Label from '../Label';

const CardNumberInput = () => {
  return (
    <p>
      <Label htmlFor="CardNumber">카드 번호</Label>
      <Styled.Wrapper marginTop="10px">
        <Input
          id="CardNumber"
          type="text"
          width="65px"
          maxLength={4}
          placeholder="0000"
          textAlign="center"
          inputMode="numeric"
        />
        <Dash />
        <Input type="text" width="65px" maxLength={4} placeholder="0000" textAlign="center" inputMode="numeric" />
        <Dash />
        <Input type="password" width="65px" maxLength={4} placeholder="0000" textAlign="center" inputMode="numeric" />
        <Dash />
        <Input type="password" width="65px" maxLength={4} placeholder="0000" textAlign="center" inputMode="numeric" />
      </Styled.Wrapper>
    </p>
  );
};

export default CardNumberInput;

const Wrapper = styled(InputBox)``;

const DashWrapper = styled.div`
  width: 13px;
  color: #737373;
  text-align: center;
`;

const Styled = {
  Wrapper,
};

export const Dash = () => {
  return <DashWrapper>-</DashWrapper>;
};
