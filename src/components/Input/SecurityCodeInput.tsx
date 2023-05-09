import styled from 'styled-components';
import { Tooltip } from '../common/Tooltip';
import { Input } from '../common/Input';
import { InputContainer } from '../common/InputContainer';
import { useSecurityCodeInput } from '../../hooks/input/useSecurityCodeInput';
import { CVC_TOOLTIP_MESSAGE, PASSWORD_TEXT, SECURITY_CODE_SIZE } from '../../constants';
import { SecurityCode } from '../../types';

interface Props {
  securityCode: SecurityCode;
  securityCodeInputRef: React.RefObject<HTMLInputElement>;
  setSecurityCode: (input: SecurityCode) => void;
  moveFocusToPassword?: () => void;
}

export function SecurityCodeInput({
  securityCode,
  securityCodeInputRef,
  setSecurityCode,
  moveFocusToPassword,
}: Props) {
  const { securityCodeError, updateSecurityCodeError, handleInputChange } = useSecurityCodeInput({
    securityCode,
    setSecurityCode,
    moveFocusToPassword,
  });

  return (
    <div>
      <Style.Label htmlFor='CVC'>
        <Style.Title>
          보안 코드(CVC/CVV)<Style.Essential>*</Style.Essential>
        </Style.Title>
      </Style.Label>
      <Style.TooltipContainer>
        <InputContainer width={'84px'}>
          <Input
            id='CVC'
            ref={securityCodeInputRef}
            value={securityCode}
            width={'84px'}
            minLength={SECURITY_CODE_SIZE}
            maxLength={SECURITY_CODE_SIZE}
            placeholder={PASSWORD_TEXT.repeat(SECURITY_CODE_SIZE)}
            onChange={handleInputChange}
            onBlur={updateSecurityCodeError}
            inputMode='numeric'
            type='password'
            required
            aria-labelledby='securityCodeCaption'
          />
        </InputContainer>
        <Tooltip message={CVC_TOOLTIP_MESSAGE} />
      </Style.TooltipContainer>
      <Style.Caption id='securityCodeCaption' aria-live='assertive'>
        {securityCodeError}
      </Style.Caption>
    </div>
  );
}

const Style = {
  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;
    margin-bottom: 10px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: var(--grey-700);
  `,

  Essential: styled.span`
    color: var(--red-100);
  `,

  TooltipContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  Caption: styled.p`
    height: 8px;
    margin-top: 8px;

    font-size: 10px;
    color: var(--red-200);
  `,
};
