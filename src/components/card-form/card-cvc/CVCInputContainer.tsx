import React from 'react';
import CVCInput from './CVCInput';
import { useAppDispatch } from '../../../hooks/hooks';
import { createAction } from '../../Provider';
import ActionType from '../../../types';
import { UseFormRegisterOption } from '../../../hooks/useForm/types';

function CVCInputContainer() {
  const dispatch = useAppDispatch();

  const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch(createAction(ActionType.UPDATE_EDITING_CVC, true));
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    dispatch(createAction(ActionType.UPDATE_EDITING_CVC, false));
  };

  const registerOptions: UseFormRegisterOption = {
    onBlur,
    onFocus,
    minLength: {
      value: 3,
      message: '3자리 이상 입력해 주세요',
    },
    maxLength: {
      value: 4,
    },
  };
  return <CVCInput {...registerOptions} />;
}

export default CVCInputContainer;
