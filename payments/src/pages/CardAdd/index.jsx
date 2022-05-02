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

const CardAdd = () => {
  const [inputStates, dispatch] = useCard();
  const [visible, setVisible] = useState(false);

  const { cardNumber, expiredDate, ownerName, secureCode, password } = inputStates;

  return (
    <>
      <div className='card-add'>
        <header>
          <button>{'<'}</button>
          <p>카드 추가</p>
        </header>
        <div className='card-add__contpmainer'>
          <Card state={inputStates} setVisible={setVisible} />
          <form>
            <CardNumberInput state={cardNumber} updateForm={dispatch} />
            <ExpiredDateInput state={expiredDate} updateForm={dispatch} />
            <OwnerNameInput state={ownerName} updateForm={dispatch} />
            <SecureCodeInput state={secureCode} updateForm={dispatch} />
            <CardPasswordInput state={password} updateForm={dispatch} />
          </form>
        </div>
        <NextButton state={inputStates} />
      </div>
      <CardColorPicker visible={visible} setVisible={setVisible} updateForm={dispatch} />
    </>
  );
};
export default CardAdd;
