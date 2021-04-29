import React, { useEffect, useState } from 'react';
import CardAddPage from './page/CardAddPage/CardAddPage';
import CardRegisterPage from './page/CardRegisterPage/CardRegisterPage';
import { isNumber } from './utils/validator';

function App() {
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
  const [cardName, setCardName] = useState('');

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

  const handleCardNumbersInput = ({ target: { value } }, key) => {
    isNumber(value) && setCardNumbers({ ...cardNumbers, [key]: value.trim() });
  };

  const handleCardCompany = ({ target }) => {
    const company = target.closest('li').dataset.company;

    setCardCompany({
      name: `${company} 카드`,
      color: `bg-${company}`,
    });
    setIsModalOpened(false);
  };

  useEffect(() => {
    if (cardNumbers.first.length + cardNumbers.second.length === 8 && !cardCompany.name) {
      setIsModalOpened(true);
    }
  }, [cardNumbers, cardCompany]);

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

  const handleOwnerNameInput = ({ target: { value } }) => {
    setOwnerName(value.trimStart());
  };

  const handleSecurityCodeInput = ({ target: { value } }) => {
    isNumber(value) && setSecurityCode(value.trim());
  };

  const handlePasswordInput = ({ target: { value, name } }) => {
    isNumber(value) && setPassword({ ...password, [name]: value.trim() });
  };

  const handleCardInfoSubmit = (e) => {
    e.preventDefault();

    setIsAllValid(true);
  };

  return (
    <div className="relative mt-5 mx-auto p-5 max-w-375 bg-white rounded-3xl">
      {!isAllValid ? (
        <CardAddPage
          cardNumbers={cardNumbers}
          cardCompany={cardCompany}
          expiration={expiration}
          ownerName={ownerName}
          securityCode={securityCode}
          password={password}
          isModalOpened={isModalOpened}
          handleCardNumbersInput={handleCardNumbersInput}
          handleCardCompany={handleCardCompany}
          handleExpirationInput={handleExpirationInput}
          handleOwnerNameInput={handleOwnerNameInput}
          handleSecurityCodeInput={handleSecurityCodeInput}
          handlePasswordInput={handlePasswordInput}
          handleCardInfoSubmit={handleCardInfoSubmit}
        />
      ) : (
        <CardRegisterPage
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
          expiration={expiration}
          ownerName={ownerName}
          cardName={cardName}
          setIsAllValid={setIsAllValid}
          resetState={resetState}
          setCardName={setCardName}
        />
      )}
    </div>
  );
}

export default App;
