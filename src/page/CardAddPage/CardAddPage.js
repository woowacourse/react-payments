import React from 'react';

import BackButton from '../../components/BackButton/BackButton';
import Card from '../../components/Card/Card';
import ModalPage from '../ModalPage/ModalPage';
import TextButton from '../../components/TextButton/TextButton';

import CardNumberInput from './CardNumberInput';
import CardExpirationInput from './CardExpirationInput';
import CardOwnerNameInput from './CardOwnerNameInput';
import CardSecurityCodeInput from './CardSecurityCodeInput';
import CardPasswordInput from './CardPasswordInput';
import PropTypes from 'prop-types';

const CardAddPage = (props) => {
  const {
    cardNumbers,
    cardCompany,
    expiration,
    ownerName,
    securityCode,
    password,
    isModalOpened,
    handleCardNumbersInput,
    handleCardCompany,
    handleExpirationInput,
    handleOwnerNameInput,
    handleSecurityCodeInput,
    handlePasswordInput,
    handleCardInfoSubmit,
  } = props;

  return (
    <div className="p-5">
      <div className="flex items-center">
        <BackButton />
        <h1 className="ml-4 text-xl">카드 추가</h1>
      </div>

      <div className="flex justify-center my-7">
        <Card
          name={ownerName || 'NAME'}
          expiration={`${expiration.month || 'MM'}/${expiration.year || 'YY'}`}
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
        />
      </div>

      <form onSubmit={handleCardInfoSubmit}>
        <CardNumberInput cardNumbers={cardNumbers} handleCardNumbersInput={handleCardNumbersInput} />
        <CardExpirationInput expiration={expiration} handleExpirationInput={handleExpirationInput} />
        <CardOwnerNameInput ownerName={ownerName} handleOwnerNameInput={handleOwnerNameInput} />
        <CardSecurityCodeInput securityCode={securityCode} handleSecurityCodeInput={handleSecurityCodeInput} />
        <CardPasswordInput password={password} handlePasswordInput={handlePasswordInput} />
        <TextButton text={'다음'} />
      </form>

      {isModalOpened && <ModalPage onClick={handleCardCompany} />}
    </div>
  );
};
export default CardAddPage;

CardAddPage.propTypes = {
  cardNumbers: PropTypes.object.isRequired,
  cardCompany: PropTypes.object.isRequired,
  expiration: PropTypes.object.isRequired,
  ownerName: PropTypes.string,
  securityCode: PropTypes.string.isRequired,
  password: PropTypes.object.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  handleCardNumbersInput: PropTypes.func.isRequired,
  handleCardCompany: PropTypes.func.isRequired,
  handleExpirationInput: PropTypes.func.isRequired,
  handleOwnerNameInput: PropTypes.func.isRequired,
  handleSecurityCodeInput: PropTypes.func.isRequired,
  handlePasswordInput: PropTypes.func.isRequired,
  handleCardInfoSubmit: PropTypes.func.isRequired,
};
