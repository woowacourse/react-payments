import React, { useContext, useEffect } from 'react';

import BackButton from '../../components/BackButton/BackButton';
import Card from '../../components/Card/Card';
import ModalPage from '../ModalPage/ModalPage';
import TextButton from '../../components/TextButton/TextButton';

import CardNumberInput from './CardNumberInput';
import CardExpirationInput from './CardExpirationInput';
import CardOwnerNameInput from './CardOwnerNameInput';
import CardSecurityCodeInput from './CardSecurityCodeInput';
import CardPasswordInput from './CardPasswordInput';

import { PaymentsContext } from '../../contexts/PaymentsContextProvider';

const CardAddPage = (props) => {
  const { isModalOpened, handleModalOpen, handleModalClosed } = props;
  const { cardNumbers, cardCompany, expiration, ownerName, handleCardInfoSubmit } = useContext(PaymentsContext);

  useEffect(() => {
    if (cardNumbers.value.first.length + cardNumbers.value.second.length === 8 && !cardCompany.value.name) {
      handleModalOpen();
    }
  }, [cardNumbers.value, cardCompany.value, handleModalOpen]);

  return (
    <div className="p-5">
      <div className="flex items-center">
        <BackButton />
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

      <form onSubmit={handleCardInfoSubmit}>
        <CardNumberInput />
        <CardExpirationInput />
        <CardOwnerNameInput />
        <CardSecurityCodeInput />
        <CardPasswordInput />
        <TextButton text={'다음'} />
      </form>

      {isModalOpened && <ModalPage handleModalClosed={handleModalClosed} />}
    </div>
  );
};
export default CardAddPage;
