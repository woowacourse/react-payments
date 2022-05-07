import { useEffect } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import Input from '../Input';
import { checkOwnerName } from '../../validation';
import { ACTION, useCardFormContext } from '../../context/card-form-context';
import * as styled from './index.styled';

const showOwnerNameLength = (length) => {
  return `${length}`.padStart(2, '0');
};

const CardOwner = () => {
  const { dispatch } = useCardFormContext();
  const [ownerName, isOwnerNameError, onChangeOwnerName] = useInputValue({
    isValidateInput: checkOwnerName,
  });

  useEffect(() => {
    if (isOwnerNameError) return;
    dispatch({ type: ACTION.OWNER_NAME, data: { ownerName } });
  }, [isOwnerNameError, ownerName, dispatch]);

  return (
    <styled.Container>
      <styled.MaxNumberIndicator>
        {showOwnerNameLength(ownerName.length)}/30
      </styled.MaxNumberIndicator>
      <FieldSet
        id="cardOwnerName"
        description="카드 소유자 이름(선택)"
        errorMessage="이름은 30자 이하의 영문이어야 합니다."
        isError={isOwnerNameError}
      >
        {
          <Input
            id="cardOwnerName"
            scale="large"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            value={ownerName}
            onChange={onChangeOwnerName}
          />
        }
      </FieldSet>
    </styled.Container>
  );
};

export default CardOwner;
