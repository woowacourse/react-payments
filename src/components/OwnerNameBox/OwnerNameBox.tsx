import { useContext } from 'react';

import CardContext from '../../contexts/CardContext';

import { OWNER_NAME } from '../../constants/card';
import { ERROR_MESSAGE } from '../../constants/message';
import { isAlpha } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';
import { useInputBox } from '../../hooks/useInputBox';

import * as styled from './OwnerNameBox.styled';
import * as commonStyled from '../Common/Common.styled';
import Input from '../Input/Input';

const OwnerNameBox = () => {
  const { ownerName, setOwnerName, expirationDate } = useContext(CardContext);
  const { validate, errorMessageState } = useInputValidator(
    isAlpha,
    ERROR_MESSAGE.SHOULD_ALPHA,
    OWNER_NAME.MAX_LENGTH
  );
  const isExpirationDateFull = expirationDate.year?.length === 2;

  return (
    <styled.OwnerNameBox>
      <label>
        <styled.LabelTextBox>
          <commonStyled.LabelTextParagraph>
            카드 소유자 이름(선택)
          </commonStyled.LabelTextParagraph>
          <commonStyled.LabelTextParagraph>
            {ownerName?.length}/30
          </commonStyled.LabelTextParagraph>
        </styled.LabelTextBox>
        <styled.InputBox>
          <Input
            value={ownerName ?? ''}
            onChange={useInputBox(validate, ownerName, setOwnerName)}
            width="xl"
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            isFocus={isExpirationDateFull}
          />
        </styled.InputBox>
      </label>
      <commonStyled.ErrorMessageParagraph>
        {errorMessageState}
      </commonStyled.ErrorMessageParagraph>
    </styled.OwnerNameBox>
  );
};

export default OwnerNameBox;
