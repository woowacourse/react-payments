import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardAliasUpdateForm from '../../components/CardAliasUpdateForm/CardAliasUpdateForm';
import CardPreview from '../../components/CardPreview/CardPreview';
import Content from '../../components/Layout/Content/Content';
import CardsContext from '../../contexts/CardsContext';

const CardAliasUpdatePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { updateCard } = useContext(CardsContext);

  const onSubmit = ({ target }) => {
    const formData = new FormData(target);
    const alias = formData.get('alias').trim();

    if (alias !== '') {
      const cardInfo = Object.fromEntries(formData);

      updateCard(state.id, cardInfo);
    }

    navigate('/');
  };

  return (
    <Content>
      <VerticalGrid>
        <StyledTitle>카드등록이 완료되었습니다.</StyledTitle>
        <CardPreview size="big" {...state} />
        <CardAliasUpdateForm onSubmit={onSubmit} />
      </VerticalGrid>
    </Content>
  );
};

const StyledTitle = styled.h2`
  margin-top: 100px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
`;

const VerticalGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 150px 1fr 1fr;
`;

export default CardAliasUpdatePage;
