import { useContext } from 'react';

import CardInfoContext from '../../contexts/CardInfoContext';

import { QSMark } from '../../assets/svgs';
import { SECURITY_CODE } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';
import { isNumeric } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';
import { useInputBox } from '../../hooks/useInputBox';

import * as styled from './SecurityCodeInputBox.styled';
import Input from '../Input/Input';
import Tooltip from '../Tooltip/Tooltip';

const SecurityCodeInputBox = () => {
  const { securityCode, setSecurityCode, ownerName } = useContext(CardInfoContext);
  const { validate, errorMessageState } = useInputValidator(
    isNumeric,
    ERROR_MESSAGE.SHOULD_NUMBER,
    SECURITY_CODE.MAX_LENGTH
  );

  const isOwnerNameFull = ownerName?.length === 30;

  return (
    <styled.SecurityCodeInputBox>
      <label>
        <styled.LabelHeader>
          <span>보안 코드(CVC/CVV)</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          <Input
            value={securityCode}
            onChange={useInputBox(validate, securityCode, setSecurityCode)}
            width="m"
            type="password"
            maxLength={3}
            isFocus={isOwnerNameFull}
          />
          <Tooltip message="CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자입니다.">
            <QSMark />
          </Tooltip>
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessageState}</styled.ErrorMessage>
    </styled.SecurityCodeInputBox>
  );
};

export default SecurityCodeInputBox;
