import React from 'react';
import CVCInput from './CVCInput';
import { UseFormRegisterOption } from '../../../hooks/useForm/types';
import { useCardRegisterContext } from '../../../context';

function CVCInputContainer() {
  const { updateIsEditingCVC } = useCardRegisterContext();

  const registerOptions: UseFormRegisterOption = {
    onBlur: () => updateIsEditingCVC(false),
    onFocus: () => updateIsEditingCVC(true),
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
