import Label from '../Label';
import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import ToolTip from '../ToolTip';

const SecurityCodeInput = () => {
  return (
    <>
      <Label htmlFor="security-code">보안 코드(CVC/CVV)</Label>
      <Styled.Flex>
        <Styled.Wrapper>
          <Input
            id="security-code"
            type="password"
            width="84px"
            maxLength={3}
            textAlign="center"
            inputMode="numeric"
            autoComplete="off"
          />
        </Styled.Wrapper>
        <ToolTip message="카드 뒷면의 번호 3자리를 입력해주세요.">
          <Styled.QuestionToolTip>?</Styled.QuestionToolTip>
        </ToolTip>
      </Styled.Flex>
    </>
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

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const QuestionToolTip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.6);
`;

const Styled = {
  Wrapper,
  Flex,
  QuestionToolTip,
};
