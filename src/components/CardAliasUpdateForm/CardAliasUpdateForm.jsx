import React from 'react';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import useEasyForm from '../../hooks/useEasyForm';

const CardAliasUpdateForm = ({ onSubmit }) => {
  const { registerForm, registerInput } = useEasyForm({
    shouldUseReportValidity: false,
  });

  const onError = ({ target: { elements } }) => {
    const firstInvalidInput = Array.from(elements).find(
      ({ validationMessage }) => validationMessage !== ''
    );

    alert(`${firstInvalidInput.validationMessage} [${firstInvalidInput.name}]`);
    firstInvalidInput.focus();
  };

  return (
    <form {...registerForm({ onSubmit, onError })}>
      <Input
        type="text"
        placeholder="새 카드"
        {...registerInput('alias', { maxLength: 30 })}
      />
      <SubmitButton type="submit">확인</SubmitButton>
    </form>
  );
};

export default CardAliasUpdateForm;
