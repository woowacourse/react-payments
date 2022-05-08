import React from 'react';
import { UseFormRegisterOption } from '../../../hooks/useForm/types';
import { useCardRegisterContext } from '../../../context';
import PositiveNumberInput from '../../common/PositiveNumberInput';
import { useFormContext } from '../../../hooks/useForm/useFormContext';
import { inputStyle } from './CVCInput.styled';

function CVCInputContainer() {
  const { register } = useFormContext();
  const { updateIsEditingCVC } = useCardRegisterContext();

  const registerOptions: UseFormRegisterOption = {
    onBlur: () => updateIsEditingCVC(false),
    onFocus: () => updateIsEditingCVC(true),
    required: { value: true },
    pattern: {
      value: '[0-9]{3,4}',
      message: '3자리 이상 입력해 주세요',
    },
    maxLength: { value: 4 },
  };
  return <PositiveNumberInput css={inputStyle} type="password" {...register('cvc', { ...registerOptions })} />;
}

export default CVCInputContainer;
