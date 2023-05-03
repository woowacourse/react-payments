import { ChangeEvent, useContext } from 'react';

import CardContext from '../../contexts/CardContext';

import { QSMark } from '../../assets/svgs';
import { SECURITY_CODE } from '../../constants/card';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';

import * as styled from './SecurityCodeBox.styled';
import * as commonStyled from '../Common/Common.styled';
import Input from '../Input/Input';
import Tooltip from '../Tooltip/Tooltip';

const SecurityCodeBox = () => {
  const { securityCode, setSecurityCode, ownerName } = useContext(CardContext);
  const { validate, errorMessageState } = useInputValidator(
    isNumeric,
    ERROR_MESSAGE.SHOULD_NUMBER,
    SECURITY_CODE.MAX_LENGTH
  );
  const isOwnerNameFull = ownerName?.length === 30;

  const handleChangeInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!validate(value)) {
      return;
    }

    setSecurityCode(value);
  };

  return (
    <styled.SecurityCodeBox>
      <label>
        <commonStyled.LabelTextParagraph>
          보안 코드(CVC/CVV)
        </commonStyled.LabelTextParagraph>
        <styled.InputBox>
          <Input
            value={securityCode}
            onChange={handleChangeInput}
            width="m"
            type="password"
            maxLength={3}
            isFocus={isOwnerNameFull}
          />
          <Tooltip message="CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자입니다.">
            <QSMark />
          </Tooltip>
        </styled.InputBox>
      </label>
      <commonStyled.ErrorMessageParagraph>
        {errorMessageState}
      </commonStyled.ErrorMessageParagraph>
    </styled.SecurityCodeBox>
  );
};

export default SecurityCodeBox;
