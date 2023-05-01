import { useEffect } from 'react';
import styled from 'styled-components';
import { Tooltip } from '../Tooltip/Tooptip';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { isFullInput } from '../../utils';
import { hasValidLength, isNumeric } from '../../utils/validator';
import { ERROR, PASSWORD_TEXT, SECURITY_CODE_SIZE } from '../../constants';
import { SecurityCode } from '../../types';

interface Props {
  securityCode: SecurityCode;
  securityCodeInputRef: React.RefObject<HTMLInputElement>;
  caption?: string;
  setSecurityCode: (input: SecurityCode) => void;
  moveFocusToPassword?: () => void;
}

export function SecurityCodeInput({
  securityCode,
  securityCodeInputRef,
  caption = '카드 뒷면 서명란에 인쇄된 숫자 끝 3자리를 입력해주세요.',
  setSecurityCode,
  moveFocusToPassword,
}: Props) {
  const tooltipMessage = '카드 뒷면 서명란에 인쇄된 숫자 끝 3자리를 입력해주세요.';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumeric(e.target.value)) return;

    setSecurityCode(e.target.value.toUpperCase());
  };

  const validateSecurityCode = () => {
    if (!hasValidLength(securityCode, SECURITY_CODE_SIZE) && securityCode !== '') {
      alert(ERROR.INVALID_SECURITY_CODE);

      setSecurityCode('');
      securityCodeInputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (isFullInput(securityCode, SECURITY_CODE_SIZE) && moveFocusToPassword) moveFocusToPassword();
  }, [securityCode]);

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
            onBlur={validateSecurityCode}
            inputMode='numeric'
            type='password'
            required
            aria-labelledby='securityCodeCaption'
          />
        </InputContainer>
        <Tooltip message={tooltipMessage} />
      </Style.TooltipContainer>
      <Style.Caption id='securityCodeCaption'>{caption}</Style.Caption>
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
    color: #2f2f2f;
  `,

  Essential: styled.span`
    color: red;
  `,

  TooltipContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  Caption: styled.p`
    margin-top: 8px;

    font-size: 10px;
    color: #737373;
  `,
};
