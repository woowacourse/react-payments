import { useRef } from 'react';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './SecurityCode.styles';

interface SecurityCodeProps {
  securityCode: string;
  checkSecurityCode: (value: string) => void;
}

const SecurityCode = ({
  securityCode,
  checkSecurityCode,
}: SecurityCodeProps) => {
  const securityCodeRef = useRef<HTMLInputElement>(null);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    checkSecurityCode(e.target.value);
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
        <Styled.Tooltip type="button" tabIndex={-1}>
          ?
        </Styled.Tooltip>
      </Styled.InputWrapper>
    </>
  );
};

export default SecurityCode;
