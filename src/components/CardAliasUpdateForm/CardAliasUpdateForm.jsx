import React from 'react';
import styled from 'styled-components';
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
    <StyledForm {...registerForm({ onSubmit, onError })}>
      <Input
        type="text"
        placeholder="새 카드"
        {...registerInput('alias', {
          className: 'input-underline',
          maxLength: 30,
        })}
      />
      <SubmitButton type="submit">확인</SubmitButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  margin-top: 20px;
  align-items: center;
  height: 50px;
`;

export default CardAliasUpdateForm;
