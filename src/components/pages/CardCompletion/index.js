import React, { useEffect } from 'react';

const CardCompletion = (props) => {
  const { bankId, cardNumbers, expirationDate, ownerName, secureCode, cardPassword } = props;

  useEffect(() => {
    console.log(props);
  });

  return (
    <>
      <div>카드 등록 완료 페이지</div>
    </>
  );
};

export default CardCompletion;
