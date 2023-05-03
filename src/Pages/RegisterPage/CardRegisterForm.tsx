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
import { useContext } from 'react';
import { useFormHandler } from 'hooks/useFormHandler';
import { AddCardContext } from 'context/CardContext';
import { Card } from 'types/Card';

const CardRegisterForm = () => {
  const {
    cardNumber,
    date,
    name,
    cardCompany,
    isModalActive,
    setIsModalActive,
  } = useContext(AddCardContext);

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

        <CardPreview cardInfo={cardInfo} handleModal={handleModal} />

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
          element={<CardBankList setModal={handleModal} />}
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

export default CardRegisterForm;
