import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardNumber, CardOwner, CardPassword, CardSecurityCode, CardShape, DueDate, TextNav } from '../components';
import useCardState from '../hooks/useCardState';

function CardAdd() {
  const { cardNumber, cardOwnerName, dueDate, dimensions, cardCompany, cardCompanyList, isAllCompleted } =
    useCardState();
  const navigate = useNavigate();

  const isCompleted = Object.values(isAllCompleted).every(ok => ok);

  const cardInfo = useMemo(
    () => ({
      number: cardNumber,
      ownerName: cardOwnerName,
      dueDate,
      company: cardCompany,
    }),
    [cardNumber, cardOwnerName, dueDate, cardCompany],
  );

  const handleClick = () => {
    alert('카드 등록이 완료 되었습니다 :D');
    navigate(`/card-add-complete`, { state: { cardInfo } });
  };

  return (
    <>
      <CardShape
        type="EMPTY_CARD"
        cardNumber={cardNumber}
        cardOwnerName={cardOwnerName}
        dueDate={dueDate}
        dimensions={dimensions}
        cardCompanyList={cardCompanyList}
      />
      <CardNumber />
      <DueDate dimensions={dimensions} />
      <CardOwner />
      <CardSecurityCode />
      <CardPassword />
      <TextNav isAllCompleted={isCompleted} handleClick={handleClick} />
    </>
  );
}

export default React.memo(CardAdd);
