import { ForwardedRef, forwardRef, RefObject } from 'react';
import CardInput from '../CardInput/CardInput';
import CardLabel from '../CardLabel/CardLabel';
import * as Styled from './SecurityCode.styles';

export interface SecurityCodeProps {
  securityCode: string;
  checkSecurityCode: (value: string) => void;
  nextRef: RefObject<HTMLInputElement>;
}

const SecurityCode = forwardRef(
  (
    { securityCode, checkSecurityCode, nextRef }: SecurityCodeProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const securityCodeRef = ref as RefObject<HTMLInputElement>;

    const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      checkSecurityCode(e.target.value);
      if (securityCodeRef.current?.value.length === 3) {
        nextRef.current?.focus();
        return;
      }
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
          <Styled.Tooltip type="button">?</Styled.Tooltip>
        </Styled.InputWrapper>
      </>
    );
  }
);

export default SecurityCode;
