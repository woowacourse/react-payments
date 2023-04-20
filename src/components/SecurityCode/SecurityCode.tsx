import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import styled from 'styled-components';
import { useRef } from 'react';

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
  tab
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

interface SecurityCodeProps {
  securityCode: string;
  setSecurityCode: React.Dispatch<React.SetStateAction<string>>;
}

const SecurityCode = ({ securityCode, setSecurityCode }: SecurityCodeProps) => {
  const securityCodeRef = useRef<HTMLInputElement>(null);

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
        <QuestionButton type="button" tabIndex={-1}>
          ?
        </QuestionButton>
      </InputWrapper>
    </>
  );
};

export default SecurityCode;
