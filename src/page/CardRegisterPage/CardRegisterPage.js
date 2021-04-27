import React from 'react';
import Card from '../../components/Card/Card';
import UnderLineInput from '../../components/UnderLineInput/UnderLineInput';
import TextButton from '../../components/TextButton/TextButton';
import PropTypes from 'prop-types';

const CardRegisterPage = (props) => {
  const { cardCompany, cardNumbers, expiration, ownerName, resetState, setCardName } = props;

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
      <UnderLineInput name={'cardName'} />
      <div className="mt-40">
        <TextButton text={'완료'} />
      </div>
    </form>
  );
};

export default CardRegisterPage;

CardRegisterPage.propTypes = {
  cardCompany: PropTypes.object.isRequired,
  cardNumbers: PropTypes.object.isRequired,
  expiration: PropTypes.object.isRequired,
  ownerName: PropTypes.string,
  resetState: PropTypes.func,
  setCardName: PropTypes.func,
};
