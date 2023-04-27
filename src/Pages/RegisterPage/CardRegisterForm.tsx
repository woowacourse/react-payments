import { useState } from 'react';
import CardNumberInput from './FormInputs/CardNumberInput';
import ExpirationDateInput from './FormInputs/ExpirationDateInput';
import NameInput from './FormInputs/NameInput';
import PasswordInput from './FormInputs/PasswordInput';
import SecurityCodeInput from './FormInputs/SecurityCodeInput';
import CardPreview from './CardPreview';
import { Card } from 'types/Card';
import { useFormHandler } from 'hooks/useFormHandler';
import Header from 'components/Header';
import NextButton from 'components/Button';
import Modal from 'components/Modal';

const CardRegisterForm = () => {
  const [isModalActive, setIsModalActive] = useState(true);

  const handleModal = () => {
    setIsModalActive(!isModalActive);
  };

  const [cardNumber, setCardNumber] = useState({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  });

  const [date, setDate] = useState({
    month: '',
    year: '',
  });

  const [name, setName] = useState({
    name: '',
  });

  const cardInfo: Card = { ...cardNumber, ...date, ...name };

  const { handleForm } = useFormHandler();

  return (
    <>
      <div>
        <Header navigator title="카드 추가" />

        <CardPreview cardInfo={cardInfo} handleModal={handleModal} />

        <form onSubmit={handleForm}>
          <CardNumberInput
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
          />
          <ExpirationDateInput date={date} setDate={setDate} />
          <NameInput name={name} setName={setName} />
          <SecurityCodeInput />
          <PasswordInput />
          <NextButton>다음</NextButton>
        </form>
      </div>
      {isModalActive && (
        <Modal
          modal={isModalActive}
          height="300"
          element={<div>카드추가</div>}
        />
      )}
    </>
  );
};

export default CardRegisterForm;
