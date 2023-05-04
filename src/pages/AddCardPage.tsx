import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import CardSelectModal from '../components/CardSelectModal';
import FormCardAdd from '../components/FormCardAdd';
import Header from '../components/Header';
import useInput from '../hooks/useInput';
import usePasswordInput from '../hooks/usePasswordInput';
import type { CardNumber, InputHook } from '../type';
import { formatExpireDate, handleNumberInput } from '../utils/processData';
import { isNumberInput, stringToUpperCase } from '../utils/util';
import {
  cardExpireCondition,
  cardOwnerCondition,
  cardPasswordCondition,
  securityCodeCondition,
} from '../utils/validate';
import './AddCardPage.css';

const AddCardPage = () => {
  const navigate = useNavigate();
  const [cardType, setCardType] = useState('BC카드');
  const [modalOpen, setModalOpen] = useState(true);
  const [cardFlip, setCardFlip] = useState(false);

  const [cardNumber, onChangeCardNumber] = usePasswordInput<CardNumber>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const cardExpire = useInput('', cardExpireCondition, formatExpireDate);
  const securityCode = useInput('', securityCodeCondition, handleNumberInput);
  const cardOwner = useInput('', cardOwnerCondition, stringToUpperCase);
  const cardPasswordFirstDigit = useInput('', cardPasswordCondition, handleNumberInput);
  const cardPasswordSecondDigit = useInput('', cardPasswordCondition, handleNumberInput);

  const onBackButtonClick = () => {
    navigate('/');
  };

  const cardNumberProps: InputHook<CardNumber> = {
    value: cardNumber,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const lastWord = e.target.value[e.target.value.length - 1];

      if (e.target.value.length > 4) return;
      if (e.target.value.length > 0 && !isNumberInput(lastWord)) return;

      onChangeCardNumber(e);
    },
  };

  return (
    <>
      <div className="add-card-page">
        <Header headerTitle="뒤로가기" clickHandler={onBackButtonClick} />
        <section className="add-card-page-body">
          <div className="card-image-box">
            <Card
              cardType={cardType}
              cardNumber={cardNumber}
              cardOwner={cardOwner.value}
              expired={cardExpire.value}
              securityCode={securityCode.value}
              cardFlipped={cardFlip}
              openCardSelectModal={setModalOpen}
            />
            <span>이미지를 클릭하여 카드사를 변경할 수 있습니다.</span>
          </div>
          <FormCardAdd
            cardType={cardType}
            cardNumber={cardNumberProps}
            cardExpire={cardExpire}
            cardOwner={cardOwner}
            securityCode={securityCode}
            cardPasswordFirstDigit={cardPasswordFirstDigit}
            cardPasswordSecondDigit={cardPasswordSecondDigit}
            cardFlipper={setCardFlip}
          />
        </section>
      </div>
      {modalOpen ? (
        <CardSelectModal determineCardType={setCardType} closeModal={setModalOpen} />
      ) : (
        ''
      )}
    </>
  );
};

export default AddCardPage;
