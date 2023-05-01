import Label from '../Label';
import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import useAutoFocus from '../../hooks/useAutoFocus';

const CardPasswordInput = () => {
  const { inputRefs, focusNext } = useAutoFocus(1);

  return (
    <>
      <Label htmlFor="password">카드 비밀번호</Label>
      <Styled.Wrapper marginTop="10px">
        <Styled.Box>
          <Input
            id="password"
            type="password"
            width="43px"
            maxLength={1}
            textAlign="center"
            inputMode="numeric"
            autoComplete="off"
            ref={(node: HTMLInputElement) => {
              inputRefs.current[0] = node;
            }}
            onChange={(e) => focusNext(0)}
          />
        </Styled.Box>
        <Styled.Box>
          <Input
            type="password"
            width="43px"
            maxLength={1}
            textAlign="center"
            inputMode="numeric"
            autoComplete="off"
            ref={(node: HTMLInputElement) => {
              inputRefs.current[1] = node;
            }}
          />
        </Styled.Box>
        <Input type="password" width="43px" maxLength={1} textAlign="center" value="0" disabled />
        <Input type="password" width="43px" maxLength={1} textAlign="center" value="0" disabled />
      </Styled.Wrapper>
    </>
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
