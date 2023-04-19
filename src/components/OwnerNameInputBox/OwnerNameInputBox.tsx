import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import * as styled from './OwnerNameInputBox.styled';

const OwnerNameInputBox = (props: any) => {
  const [ownerName, setOwnerName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (/^[A-Za-z](?:\s?[A-Za-z])*$/.test(ownerName)) {
      return setErrorMessage('영문과 영문 사이 띄어쓰기만 허용됩니다.');
    }

    if (errorMessage) setErrorMessage('');

    if (value.length > 30) return;

    setOwnerName(value);
  };

  return (
    <styled.OwnerNameInputBox>
      <label>
        <styled.LabelHeader>
          <span>카드 소유자 이름(선택)</span>
          <span>0 / 30</span>
        </styled.LabelHeader>
        <div>
          <Input
            value={ownerName}
            onChange={onChange}
            width="large"
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
          />
        </div>
      </label>
      <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
    </styled.OwnerNameInputBox>
  );
};

export default OwnerNameInputBox;
