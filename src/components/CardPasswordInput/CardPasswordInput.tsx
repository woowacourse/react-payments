import Label from '../Label';
import { Input, InputBox } from '../Input';
import styled from 'styled-components';

const CardPasswordInput = () => {
  return (
    <p>
      <Label htmlFor="password">카드 비밀번호</Label>
      <Styled.Wrapper marginTop="10px">
        <Styled.Box>
          <Input id="password" type="password" width="43px" maxLength={1} textAlign="center" inputMode="numeric" />
        </Styled.Box>
        <Styled.Box>
          <Input type="password" width="43px" maxLength={1} textAlign="center" inputMode="numeric" />
        </Styled.Box>
        <Input type="password" width="43px" maxLength={1} textAlign="center" value="0" disabled />
        <Input type="password" width="43px" maxLength={1} textAlign="center" value="0" disabled />
      </Styled.Wrapper>
    </p>
  );
};

export default CardPasswordInput;

type WrapperProps = {
  marginTop: string;
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  gap: 7px;
  margin-top: ${(props) => props.marginTop};
`;

const Box = styled(InputBox)`
  width: 43px;
`;

const Styled = {
  Wrapper,
  Box,
};
