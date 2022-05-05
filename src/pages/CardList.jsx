import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from 'styles.js';
import { CardStateContext } from 'context/CardContext';
import PageTitle from 'components/PageTitle';
import EnrolledCards from 'components/EnrolledCards';
import AnotherCard from 'components/AnotherCard';

function CardList() {
  const navigate = useNavigate();
  const { cards } = useContext(CardStateContext);
  const onClickPrev = () => {
    navigate('/add-card');
  };

  return (
    <S.Container>
      <PageTitle hasPrevButton={false}>카드 목록</PageTitle>

      <S.CardAlignBox>
        <EnrolledCards cards={cards} />
        <S.PointerBox>
          <AnotherCard onClick={onClickPrev} />
        </S.PointerBox>
      </S.CardAlignBox>
    </S.Container>
  );
}

export default CardList;
