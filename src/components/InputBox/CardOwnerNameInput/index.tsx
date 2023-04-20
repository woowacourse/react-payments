import { ChangeEvent, useState } from 'react';

import { Input } from '../../index';

import * as styled from './CardOwnerNameInput.styled';
import { CardInfo } from '../../../App';

const OwnerNameInputBox = ({
  setCardInfo,
  ownerName,
}: {
  setCardInfo: CallableFunction;
  ownerName: any;
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    // if (/^[A-Za-z](?:\s?[A-Za-z])*$/.test(ownerName)) {
    //   return setErrorMessage('영문과 영문 사이 띄어쓰기만 허용됩니다.');
    // }

    if (errorMessage) setErrorMessage('');

    if (value.length > 30) return;

    setCardInfo((prev: CardInfo) => {
      return {
        ...prev,
        ownerName: value,
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
            value={ownerName}
            onChange={onChange}
            type="text"
            center={false}
            width="xl"
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
