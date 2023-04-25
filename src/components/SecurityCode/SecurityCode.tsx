import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import styled from 'styled-components';
import { useRef, useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ecebf1;
  border-radius: 7px;
  margin-bottom: 20px;
`;

const QuestionButton = styled.button`
  width: 27px;
  height: 27px;
  margin-left: 12px;
  border: 1px solid #969696;
  color: #969696;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const ToolTip = styled.p`
  width: 212px;
  height: 30px;
  margin-left: 12px;
  color: #969696;
  background-color: #ecebf1;
  border-radius: 4px;
  padding: 0 4px;
  font-size: 12px;
  cursor: pointer;
`;

interface SecurityCodeProps {
  securityCode: string;
  setSecurityCode: React.Dispatch<React.SetStateAction<string>>;
}

const SecurityCode = ({ securityCode, setSecurityCode }: SecurityCodeProps) => {
  const securityCodeRef = useRef<HTMLInputElement>(null);
  const [isShowToolTip, setIsShowToolTip] = useState(false);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (/[^0-9]/g.test(e.target.value)) return;

    setSecurityCode(e.target.value);
  };

  return (
    <>
      <CardLabel labelText="보안 코드(CVC/CVV)" />
      <InputWrapper>
        <Wrapper>
          <CardInput
            type="password"
            maxLength={3}
            ref={securityCodeRef}
            onChange={handleCardInputChange}
            value={securityCode}
            placeholder="•••"
            required={true}
          />
        </Wrapper>
        {isShowToolTip ? (
          <ToolTip
            onClick={() => {
              setIsShowToolTip(false);
            }}
          >
            카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리를 적어주세요.
          </ToolTip>
        ) : (
          <QuestionButton
            type="button"
            tabIndex={-1}
            onClick={() => {
              setIsShowToolTip(true);
            }}
          >
            ?
          </QuestionButton>
        )}
      </InputWrapper>
    </>
  );
};

export default SecurityCode;
