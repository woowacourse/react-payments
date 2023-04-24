import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './OwnerNameInputBox.styled';
import { CardInfo } from '../../types/state';
import { isAlpha } from '../../validator';
import { OWNER_NAME } from '../../constants/cardInfo';
import { ERROR_MESSAGE } from '../../constants/message';

const OwnerNameInputBox = ({
  ownerName,
  setCardInfo,
}: {
  ownerName: string | undefined;
  setCardInfo: CallableFunction;
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isAlpha(value) && value.length) {
      setErrorMessage(ERROR_MESSAGE.SHOULD_ALPHA);

      return;
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > OWNER_NAME.MAX_LENGTH) return;

    setCardInfo((prev: CardInfo) => {
      return {
        ...prev,
        ownerName: value.toUpperCase(),
      };
    });
  };

  return (
    <styled.OwnerNameInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 소유자 이름(선택)</span>
          <span>0/30</span>
        </styled.LabelHeader>
        <styled.InputContainer>
          <Input
            value={ownerName ? ownerName : ''}
            onChange={onChange}
            width="xl"
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
          />
        </styled.InputContainer>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.OwnerNameInputBox>
  );
};

export default OwnerNameInputBox;
