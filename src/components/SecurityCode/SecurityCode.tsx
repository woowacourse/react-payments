import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useRef, useState } from 'react';
import * as Styled from './SecurityCode.styles';

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
      <Styled.Wrapper>
        <Styled.InputWrapper>
          <CardInput
            type="password"
            maxLength={3}
            ref={securityCodeRef}
            onChange={handleCardInputChange}
            value={securityCode}
            placeholder="•••"
            required={true}
          />
        </Styled.InputWrapper>
        {isShowToolTip ? (
          <Styled.ToolTip
            onClick={() => {
              setIsShowToolTip(false);
            }}
          >
            카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리를 적어주세요.
          </Styled.ToolTip>
        ) : (
          <Styled.QuestionButton
            type="button"
            tabIndex={-1}
            onClick={() => {
              setIsShowToolTip(true);
            }}
          >
            ?
          </Styled.QuestionButton>
        )}
      </Styled.Wrapper>
    </>
  );
};

export default SecurityCode;
