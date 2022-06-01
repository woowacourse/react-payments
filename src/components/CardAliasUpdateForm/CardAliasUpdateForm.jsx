import React from 'react';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import Footer from '../Layout/Footer/Footer';
import useEasyForm from '../../hooks/useEasyForm';
import * as S from './CardAliasUpdateForm.styled';

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
    <S.Form {...registerForm({ onSubmit, onError })}>
      <Input
        type="text"
        placeholder="새 카드"
        {...registerInput('alias', {
          className: 'input-underline',
          maxLength: 30,
        })}
      />
      <Footer>
        <SubmitButton type="submit">확인</SubmitButton>
      </Footer>
    </S.Form>
  );
};

export default CardAliasUpdateForm;
