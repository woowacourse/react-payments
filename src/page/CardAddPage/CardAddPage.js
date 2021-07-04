import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';

import BackButton from '../../components/BackButton/BackButton';
import Card from '../../components/Card/Card';
import TextButton from '../../components/TextButton/TextButton';
import { PaymentsContext } from '../../contexts/PaymentsContextProvider';
import { PAGE } from '../../utils/constants';
import ModalPage from '../ModalPage/ModalPage';
import CardExpirationInput from './CardExpirationInput';
import CardNumberInput from './CardNumberInput';
import CardOwnerNameInput from './CardOwnerNameInput';
import CardPasswordInput from './CardPasswordInput';
import CardSecurityCodeInput from './CardSecurityCodeInput';

const CardAddPage = (props) => {
  const { isModalOpened, handleModalOpen, handleModalClosed, setPageRouter } = props;
  const { cardNumbers, cardCompany, expiration, ownerName, securityCode, password, cardName } = useContext(
    PaymentsContext
  );

  useEffect(() => {
    cardNumbers.reset();
    cardCompany.reset();
    expiration.reset();
    ownerName.reset();
    securityCode.reset();
    password.reset();
    cardName.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cardNumbers.value.first.length + cardNumbers.value.second.length === 8 && !cardCompany.value.name) {
      handleModalOpen();
    }
  }, [cardNumbers.value, cardCompany.value, handleModalOpen]);

  const handleSubmitCardForm = (e) => {
    e.preventDefault();

    setPageRouter(PAGE.REGISTER);
  };

  return (
    <div className="p-5">
      <div className="flex items-center">
        <BackButton onClick={() => setPageRouter(PAGE.LIST)} />
        <h1 className="text-xl ml-4">카드 추가</h1>
      </div>

      <div className="flex justify-center my-7">
        <Card
          name={ownerName.value || 'NAME'}
          expiration={`${expiration.value.month || 'MM'}/${expiration.value.year || 'YY'}`}
          cardCompany={cardCompany.value}
          cardNumbers={cardNumbers.value}
        />
      </div>

      <form onSubmit={handleSubmitCardForm}>
        <CardNumberInput />
        <CardExpirationInput />
        <CardOwnerNameInput />
        <CardSecurityCodeInput />
        <CardPasswordInput />
        <TextButton text="다음" />
      </form>

      {isModalOpened && <ModalPage handleModalClosed={handleModalClosed} />}
    </div>
  );
};
export default CardAddPage;

CardAddPage.protoTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
  handleModalClosed: PropTypes.func.isRequired,
  setPageRouter: PropTypes.func.isRequired,
};
