import { useContext } from 'react';
import CardNumberInput from './FormInputs/CardNumberInput';
import ExpirationDateInput from './FormInputs/ExpirationDateInput';
import NameInput from './FormInputs/NameInput';
import PasswordInput from './FormInputs/PasswordInput';
import SecurityCodeInput from './FormInputs/SecurityCodeInput';
import CardPreview from './CardPreview';
import { useFormHandler } from 'hooks/useFormHandler';
import Header from 'components/Header';
import NextButton from 'components/Button';
import Modal from 'components/Modal';
import CardBankList from './CardBankList';
import { Card } from 'types/Card';
import { AddCardContext } from 'context/CardContext';

const CardRegisterForm = () => {
  const { cardNumber, date, name, bank, isModalActive, setIsModalActive } =
    useContext(AddCardContext);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  const cardInfo: Card = { ...cardNumber, ...date, ...name, ...bank };

  const { handleForm } = useFormHandler(cardInfo);

  return (
    <>
      <div>
        <Header navigator title="카드 추가" />

        <CardPreview cardInfo={cardInfo} handleModal={handleModal} />

        <form onSubmit={handleForm}>
          <CardNumberInput />
          <ExpirationDateInput />
          <NameInput />
          <SecurityCodeInput />
          <PasswordInput />
          <NextButton>다음</NextButton>
        </form>
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

export default CardRegisterForm;
