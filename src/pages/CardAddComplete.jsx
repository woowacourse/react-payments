import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { CardShape } from '../components';
import * as S from '../components/common/styles';
import useCardState from '../hooks/useCardState';

function CardAddComplete() {
  const {
    state: {
      cardInfo: { number, ownerName, dueDate, company },
    },
  } = useLocation();

  const { dimensions, cardCompany, cardCompanyList } = useCardState();

  return (
    <>
      <CardShape
        type="USER_CARD"
        company={company}
        cardNumber={number}
        cardOwnerName={ownerName}
        dueDate={dueDate}
        dimensions={dimensions}
        cardCompanyList={cardCompanyList}
      />
      <S.InputWrapperForm>
        <S.Span>
          <S.Input />
        </S.Span>
      </S.InputWrapperForm>
    </>
  );
}

export default React.memo(CardAddComplete);
