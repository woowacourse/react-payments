import { useEffect } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import Input from '../Input';
import { checkOwnerName } from '../../validation';
import { ACTION, useCardFormContext } from '../../context/card-form-context';
import * as Styled from './index.styled';

const showOwnerNameLength = (length) => {
  return `${length}`.padStart(2, '0');
};

const CardOwnerFieldSet = () => {
  const { dispatch, state } = useCardFormContext();
  const [ownerName, isOwnerNameError, onChangeOwnerName] = useInputValue({
    isValidateInput: checkOwnerName,
  });

  useEffect(() => {
    if (!state.isOwnerNameError && isOwnerNameError)
      dispatch({ type: ACTION.SET_OWNER_NAME_ERROR });
  }, [state, dispatch, isOwnerNameError]);

  useEffect(() => {
    if (isOwnerNameError) return;
    dispatch({
      type: ACTION.SET_OWNER_NAME,
      data: { ownerName, isOwnerNameError },
    });
  }, [isOwnerNameError, ownerName, dispatch]);

  return (
    <Styled.Container>
      <Styled.MaxNumberIndicator>
        {showOwnerNameLength(ownerName.length)}/30
      </Styled.MaxNumberIndicator>
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
            data-testid="card-owner-input"
          />
        }
      </FieldSet>
    </Styled.Container>
  );
};

export default CardOwnerFieldSet;
