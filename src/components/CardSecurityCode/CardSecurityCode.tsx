import CardInput from '../@common/CardInput';
import CardLabel from '../@common/CardLabel';
import { useContext, useState } from 'react';
import * as Styled from './CardSecurityCode.styles';
import { RefContext } from '../../contexts/RefProvider';
import CardErrorLabel from '../@common/CardErrorLabel';

interface SecurityCodeProps {
  securityCode: string;
  errorMessage: string;
  isValidatedSecurityCode: (value: string) => boolean;
}

const CardSecurityCode = ({
  securityCode,
  errorMessage,
  isValidatedSecurityCode,
}: SecurityCodeProps) => {
  const { inputRefs: cardRefs, focusNextInput } = useContext(RefContext);
  const [isShowToolTip, setIsShowToolTip] = useState(false);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentOrder = Number(e.target.dataset['order']);

    if (!isValidatedSecurityCode(e.target.value)) return;

    focusNextInput(currentOrder, 3);
  };

  return (
    <>
      <CardLabel labelText="보안 코드(CVC/CVV)" />
      <Styled.Wrapper>
        <Styled.InputWrapper>
          <CardInput
            type="password"
            maxLength={3}
            ref={cardRefs[7]}
            onChange={handleCardInputChange}
            value={securityCode}
            order={7}
            placeholder="•••"
            required={true}
            inputMode="numeric"
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
      <CardErrorLabel errorMessage={errorMessage} />
    </>
  );
};

export default CardSecurityCode;
