import React, { useState } from 'react';
import Card from '../Card/Card';
import CardNameInput from '../CardNameInput/CardNameInput';
import TextButton from '../TextButton/TextButton';

const CardRegisterPage = (props) => {
  const { cardCompany, cardNumbers, expiration, ownerName, resetState } = props;
  const [cardName, setCardName] = useState('');

  const handleCardSubmit = (e) => {
    e.preventDefault();

    const { value } = e.target.elements['cardName'];
    setCardName(value);
    resetState();
  };

  return (
    <form className="h-full p-5 flex flex-col items-center" onSubmit={handleCardSubmit}>
      <h1 className="mt-20 text-2xl text-gray-600">카드 등록이 완료되었습니다.</h1>
      <div className="mt-20 mb-10">
        <Card
          size={'large'}
          name={ownerName || 'NAME'}
          expiration={`${expiration.month || 'MM'}/${expiration.year || 'YY'}`}
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
        />
      </div>
      <CardNameInput name={'cardName'} />
      <div className="mt-40">
        <TextButton text={'완료'} />
      </div>
    </form>
  );
};

export default CardRegisterPage;
