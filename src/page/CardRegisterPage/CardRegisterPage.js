import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import UnderLineInput from '../../components/UnderLineInput/UnderLineInput';
import TextButton from '../../components/TextButton/TextButton';
import { PaymentsContext } from '../../contexts/PaymentsContextProvider';
import { PAGE } from '../../utils/constants';

const CardRegisterPage = (props) => {
  const { setPageRouter } = props;
  const { cardCompany, cardNumbers, expiration, ownerName, cardName } = useContext(PaymentsContext);

  const cards = JSON.parse(localStorage.getItem('cards')) ?? [];

  const handleCardSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      'cards',
      JSON.stringify([
        ...cards,
        {
          cardCompany: cardCompany.value,
          cardNumbers: cardNumbers.value,
          expiration: expiration.value,
          ownerName: ownerName.value,
          cardName: cardName.value,
        },
      ])
    );

    setPageRouter(PAGE.LIST);
  };

  return (
    <form className="h-full p-5 flex flex-col items-center" onSubmit={handleCardSubmit}>
      <h1 className="mt-20 text-2xl text-gray-600">카드 등록이 완료되었습니다.</h1>
      <div className="mt-20 mb-10">
        <Card
          size={'large'}
          name={ownerName.value || 'NAME'}
          expiration={`${expiration.value.month || 'MM'}/${expiration.value.year || 'YY'}`}
          cardCompany={cardCompany.value}
          cardNumbers={cardNumbers.value}
        />
      </div>
      <UnderLineInput name="cardName" onChange={cardName.handleChange} />
      <div className="mt-40">
        <TextButton text="완료" />
      </div>
    </form>
  );
};

export default CardRegisterPage;
