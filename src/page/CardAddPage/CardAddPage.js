import React, { useEffect, useState } from 'react';

import BackButton from '../../components/BackButton/BackButton';
import Card from '../../components/Card/Card';
import ModalPage from '../ModalPage/ModalPage';
import TextButton from '../../components/TextButton/TextButton';
import CardRegisterPage from '../CardRegisterPage/CardRegisterPage';

import CardNumberInput from './CardNumberInput';
import CardExpirationInput from './CardExpirationInput';
import CardOwnerNameInput from './CardOwnerNameInput';
import CardSecurityCodeInput from './CardSecurityCodeInput';
import CardPasswordInput from './CardPasswordInput';

const CardAddPage = () => {
  const [cardCompany, setCardCompany] = useState({ name: '', color: '' });
  const [expiration, setExpiration] = useState({ month: '', year: '' });
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState({
    first: '',
    second: '',
  });
  const [cardNumbers, setCardNumbers] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isAllValid, setIsAllValid] = useState(false);

  const resetState = () => {
    setCardCompany({ name: '', color: '' });
    setExpiration({ month: '', year: '' });
    setOwnerName('');
    setSecurityCode('');
    setPassword({
      first: '',
      second: '',
    });
    setCardNumbers({
      first: '',
      second: '',
      third: '',
      fourth: '',
    });
    setIsModalOpened(false);
    setIsAllValid(false);
  };

  const handleCardCompany = ({ target }) => {
    const company = target.closest('li').dataset.company;
    setCardCompany({
      name: `${company} 카드`,
      color: `bg-${company}`,
    });

    setIsModalOpened(false);
  };

  const handleExpirationInput = ({ target: { value } }, category) => {
    const valueAsString = String(value);

    if (valueAsString.length > 2) {
      return;
    }

    setExpiration({
      ...expiration,
      [category]: valueAsString.replace(/[^0-9]s/g, ''),
    });
  };

  const handleCardNumbersInput = ({ target: { value } }, key) => {
    const numberReg = /^[0-9]{1,4}$/gi;
    if (!numberReg.test(Number(value))) {
      return;
    }

    setCardNumbers({ ...cardNumbers, [key]: value });
  };

  useEffect(() => {
    if (cardNumbers.first.length + cardNumbers.second.length === 8 && !cardCompany.name) {
      setIsModalOpened(true);
    }
  }, [cardNumbers, cardCompany]);

  const handleOwnerNameInput = ({ target: { value } }) => {
    setOwnerName(value.trimStart());
  };

  const handleSecurityCodeInput = ({ target: { value } }) => {
    const numberReg = /^[0-9]{1,4}$/gi;

    if (!numberReg.test(Number(value))) {
      return;
    }

    setSecurityCode(value);
  };

  const handlePasswordInput = ({ target: { value, name } }) => {
    const numberReg = /^[0-9]{1,4}$/gi;
    if (!numberReg.test(Number(value))) {
      return;
    }

    setPassword({ ...password, [name]: value });
  };

  const handleCardInfoSubmit = (e) => {
    e.preventDefault();

    setIsAllValid(true);
  };

  return !isAllValid ? (
    <div className="p-5">
      <div className="flex items-center">
        <BackButton />
        <h1 className="text-xl ml-4">카드 추가</h1>
      </div>
      <div className="flex  justify-center my-7">
        <Card
          name={ownerName || 'NAME'}
          expiration={`${expiration.month || 'MM'}/${expiration.year || 'YY'}`}
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
        />
      </div>

      <form onSubmit={handleCardInfoSubmit}>
        <CardNumberInput cardNumbers={cardNumbers} handleCardNumbersInput={handleCardNumbersInput} />
        <CardExpirationInput expiration={expiration} handleExpirationInput={handleExpirationInput} />
        <CardOwnerNameInput ownerName={ownerName} handleOwnerNameInput={handleOwnerNameInput} />
        <CardSecurityCodeInput securityCode={securityCode} handleSecurityCodeInput={handleSecurityCodeInput} />
        <CardPasswordInput password={password} handlePasswordInput={handlePasswordInput} />
        <TextButton text={'다음'} />
      </form>

      {isModalOpened && <ModalPage onClick={handleCardCompany} />}
    </div>
  ) : (
    <CardRegisterPage
      cardCompany={cardCompany}
      cardNumbers={cardNumbers}
      expiration={expiration}
      ownerName={ownerName}
      resetState={resetState}
    />
  );
};
export default CardAddPage;
