import Label from '../Label';
import { Input, InputBox } from '../Input';
import styled from 'styled-components';

const SecurityCodeInput = () => {
  return (
    <p>
      <Label htmlFor="security-code">보안 코드(CVC/CVV)</Label>
      <Styled.Wrapper marginTop="10px">
        <Input id="security-code" type="password" width="84px" maxLength={3} textAlign="center" inputMode="numeric" />
      </Styled.Wrapper>
    </p>
  );
};

export default SecurityCodeInput;

const Wrapper = styled(InputBox)`
  width: 84px;

  > input {
    letter-spacing: 8px;
    padding-left: 10px;
  }
`;

const Styled = {
  Wrapper,
};
