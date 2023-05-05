import Header from 'components/Header';
import NextButton from 'components/Button';
import Modal from 'components/Modal';
import styled from 'styled-components';
import CardPreview from './CardPreview';
import CardNumberInput from './FormInputs/CardNumberInput';
import ExpirationDateInput from './FormInputs/ExpirationDateInput';
import NameInput from './FormInputs/NameInput';
import SecurityCodeInput from './FormInputs/SecurityCodeInput';
import PasswordInput from './FormInputs/PasswordInput';
import CardBankList from './CardBankList';
import { useContext, useState } from 'react';
import { useFormHandler } from 'hooks/useFormHandler';
import { AddCardContext } from 'context/CardContext';
import { Card } from 'types/Card';

const CardRegisterForm = () => {
  const { cardNumber, date, name, cardCompany } = useContext(AddCardContext);

  const [isModalActive, setIsModalActive] = useState(true);

  const handleModal = () => {
    setIsModalActive?.(!isModalActive);
  };

  const cardInfo: Card = {
    cardNumber: cardNumber,
    date: date,
    name: name,
    cardCompany: cardCompany,
  };

  const { handleForm } = useFormHandler(cardInfo);

  return (
    <>
      <div>
        <Header navigator title="카드 추가" />

        <CardPreview cardInfo={cardInfo} onClick={handleModal} />
        <CardSelectMessage>
          카드사를 변경하려면 카드를 클릭해주세요.
        </CardSelectMessage>
        <AddCardForm onSubmit={handleForm}>
          <CardNumberInput />
          <ExpirationDateInput />
          <NameInput />
          <SecurityCodeInput />
          <PasswordInput />
          <NextButton>다음</NextButton>
        </AddCardForm>
      </div>
      {isModalActive && (
        <Modal
          modal={isModalActive}
          setModal={handleModal}
          height="300"
          element={<CardBankList onBankSelected={handleModal} />}
        />
      )}
    </>
  );
};

const AddCardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CardSelectMessage = styled.p`
  font-size: 12px;
  text-align: center;
  margin-bottom: 24px;
`;

export default CardRegisterForm;
