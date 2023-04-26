import { ExpirationDate, OwnerName, SetOwnerName } from '../../types/state';
import { OWNER_NAME } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';
import { isAlpha } from '../validators/validator';
import { useInputValidator } from '../../hooks/useInputValidator';
import { useInputBox } from '../../hooks/useInputBox';

import * as styled from './OwnerNameInputBox.styled';
import Input from '../Input/Input';

interface OwnerNameInputBoxProps {
  ownerName: OwnerName;
  setOwnerName: SetOwnerName;
  expirationDate: ExpirationDate;
}

const OwnerNameInputBox = ({ ownerName, setOwnerName, expirationDate }: OwnerNameInputBoxProps) => {
  const { validate, errorMessageState } = useInputValidator(
    isAlpha,
    ERROR_MESSAGE.SHOULD_ALPHA,
    OWNER_NAME.MAX_LENGTH
  );

  const { onChange } = useInputBox(validate, ownerName, setOwnerName);

  return (
    <styled.OwnerNameInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 소유자 이름(선택)</span>
          <span>{ownerName?.length}/30</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          <Input
            value={ownerName ?? ''}
            onChange={onChange}
            width="xl"
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            isFocus={expirationDate.year?.length === 2}
          />
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessageState}</styled.ErrorMessage>
    </styled.OwnerNameInputBox>
  );
};

export default OwnerNameInputBox;
