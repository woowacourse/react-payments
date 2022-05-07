import './index.scss';

import Card from '../../components/Card';
import CardNumberInput from '../../components/CardNumberInput';
import CardPasswordInput from '../../components/CardPasswordInput';
import ExpiredDateInput from '../../components/ExpiredDateInput';
import OwnerNameInput from '../../components/OwnerNameInput';
import SecureCodeInput from '../../components/SecureCodeInput';
import NextButton from '../../components/NextButton';
import CardColorPicker from '../../components/CardColorPicker';
import { useContext, useState } from 'react';
import useNextButton from '../../hooks/useNextButton';
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';

const CardAdd = () => {
  const { inputStates, updateInputStates } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const { nextButtonClick } = useNextButton(inputStates, setVisible);

  const { cardNumber, expiredDate, ownerName, secureCode, password } = inputStates;

  return (
    <>
      <div className='card-add'>
        <header>
          <Link to='/'>
            <button>{'<'}</button>
          </Link>
          <p>카드 추가</p>
        </header>
        <form className='card-add__form' onChange={onchange}>
          <Card state={inputStates} setVisible={setVisible} needBack={true} />
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
