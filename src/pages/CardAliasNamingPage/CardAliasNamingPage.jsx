import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardPreview from '../../components/CardPreview/CardPreview';
import Input from '../../components/Input/Input';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import CardsContext from '../../contexts/CardsContext';
import useEasyForm from '../../hooks/useEasyForm';
import { convertFormDataToObject } from '../../utils/commons';

const CardAliasNamingPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { registerForm, registerInput } = useEasyForm({
    shouldUseReportValidity: false,
  });
  const { updateCard } = useContext(CardsContext);

  const onSubmit = ({ target }) => {
    const formData = new FormData(target);
    const alias = formData.get('alias').trim();

    if (alias !== '') {
      const cardInfo = convertFormDataToObject(formData);

      updateCard(state.id, cardInfo);
    }

    navigate('/');
  };

  const onError = ({ target: { elements } }) => {
    const firstInvalidInput = Array.from(elements).find(
      ({ validationMessage }) => validationMessage !== ''
    );

    alert(`${firstInvalidInput.validationMessage} [${firstInvalidInput.name}]`);
    firstInvalidInput.focus();
  };

  return (
    <div>
      <StyledTitle>카드등록이 완료되었습니다.</StyledTitle>
      <CardPreview {...state} />
      <form {...registerForm({ onSubmit, onError })}>
        <Input
          type="text"
          placeholder="새 카드"
          {...registerInput('alias', { maxLength: 30 })}
        />
        <SubmitButton type="submit">확인</SubmitButton>
      </form>
    </div>
  );
};

const StyledTitle = styled.h2`
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
  margin-top: 130px;
`;

export default CardAliasNamingPage;
