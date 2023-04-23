import { useRef } from 'react';
import { NUMBER_REGEX } from '../../constants/regex';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './SecurityCode.styles';

interface SecurityCodeProps {
  securityCode: string;
  setSecurityCode: React.Dispatch<React.SetStateAction<string>>;
}

const SecurityCode = ({ securityCode, setSecurityCode }: SecurityCodeProps) => {
  const securityCodeRef = useRef<HTMLInputElement>(null);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (NUMBER_REGEX.test(e.target.value)) return;

    setSecurityCode(e.target.value);
  };

  return (
    <>
      <CardLabel labelText="보안 코드(CVC/CVV)" />
      <Styled.InputWrapper>
        <Styled.Wrapper>
          <CardInput
            type="password"
            maxLength={3}
            ref={securityCodeRef}
            onChange={handleCardInputChange}
            value={securityCode}
            placeholder="•••"
            required={true}
          />
        </Styled.Wrapper>
        <Styled.QuestionButton type="button" tabIndex={-1}>
          ?
        </Styled.QuestionButton>
      </Styled.InputWrapper>
    </>
  );
};

export default SecurityCode;
