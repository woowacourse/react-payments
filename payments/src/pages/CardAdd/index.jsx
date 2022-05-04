import './index.scss';

import Card from '../../components/Card';
import CardNumberInput from '../../components/CardNumberInput';
import CardPasswordInput from '../../components/CardPasswordInput';
import ExpiredDateInput from '../../components/ExpiredDateInput';
import OwnerNameInput from '../../components/OwnerNameInput';
import SecureCodeInput from '../../components/SecureCodeInput';
import useCard from '../../hooks/useCard';
import NextButton from '../../components/NextButton';
import CardColorPicker from '../../components/CardColorPicker';
import { useState } from 'react';
import useCardInputValidation from '../../hooks/useValidation';
import { ERROR_MESSAGE } from '../../const';

const CardAdd = () => {
  const [inputStates, updateInputStates] = useCard();
  const [visible, setVisible] = useState(false);
  const { doValidation } = useCardInputValidation();

  const { cardNumber, expiredDate, ownerName, secureCode, password } = inputStates;

  const nextButtonClick = (e) => {
    try {
      doValidation(inputStates);
    } catch (error) {
      alert(error.message);
      switch (error.message) {
        case ERROR_MESSAGE.SHORT_CARD_NUMBER:
          inputStates.cardNumber.forEach((input, idx) => {
            if (input.length !== 4) {
              e.currentTarget.parentNode[idx].focus();
            }
          });
          return;
        case ERROR_MESSAGE.NOT_A_MONTH:
          e.currentTarget.parentNode[4].focus();
          return;
        case ERROR_MESSAGE.NO_EXPIRE_MONTH:
          e.currentTarget.parentNode[4].focus();
          return;
        case ERROR_MESSAGE.OUT_OF_RANGE_YEAR:
          e.currentTarget.parentNode[5].focus();
          return;
        case ERROR_MESSAGE.NO_EXPIRE_YEAR:
          e.currentTarget.parentNode[5].focus();
          return;
        case ERROR_MESSAGE.NO_SECURE_CODE:
          e.currentTarget.parentNode[7].focus();
          return;
        case ERROR_MESSAGE.NO_PASSWORD:
          console.log(inputStates.password);
          inputStates.password.some((input, idx) => {
            if (input === '') {
              e.currentTarget.parentNode[9 + idx].focus();
              return true;
            }
          });
          return;
        case ERROR_MESSAGE.NO_CARD_TYPE:
          setVisible(true);
          return;
        default:
          return;
      }
    }
  };

  return (
    <>
      <div className='card-add'>
        <header>
          <button>{'<'}</button>
          <p>카드 추가</p>
        </header>
        <form className='card-add__container' onChange={onchange}>
          <Card state={inputStates} setVisible={setVisible} />
          <CardNumberInput state={cardNumber} updateForm={updateInputStates} />
          <ExpiredDateInput state={expiredDate} updateForm={updateInputStates} />
          <OwnerNameInput state={ownerName} updateForm={updateInputStates} />
          <SecureCodeInput state={secureCode} updateForm={updateInputStates} />
          <CardPasswordInput state={password} updateForm={updateInputStates} />
          <NextButton onClick={nextButtonClick} />
        </form>
      </div>
      <CardColorPicker visible={visible} setVisible={setVisible} updateForm={updateInputStates} />
    </>
  );
};
export default CardAdd;
