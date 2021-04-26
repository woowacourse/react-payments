import React, { useEffect, useState } from 'react';
import BackButton from '../BackButton/BackButton';
import Card from '../Card/Card';
import Input from '../Input/Input';
import InputContainer from '../InputContainer/InputContainer';
import TextButton from '../TextButton/TextButton';
import Tooltip from '../Tooltip/Tooltip';

const CardAddPage = (props) => {
  const [cardCompany, setCardCompany] = useState({});
  const [expirationDate, setExpirationDate] = useState('');
  const [expiration, setExpiration] = useState({ month: '', year: '' });
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState({
    first: '',
    second: '',
  });
  const [cardNumbers, setCardNumbers] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const handleExpirationInput = ({ target: { value } }, type) => {
    const numberReg = /^[0-9]{1,4}$/gi;

    if (!numberReg.test(Number(value))) {
      return;
    }

    setExpiration({
      ...expiration,
      [type]: value,
    });
  };

  const handleCardNumbers = ({ target: { value } }, index) => {
    const numberReg = /^[0-9]{1,4}$/gi;

    if (!numberReg.test(Number(value))) {
      return;
    }

    setCardNumbers({ ...cardNumbers, [index]: value });
  };

  const handleOwnerName = ({ target: { value } }) => {
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

  return (
    <div className="p-5">
      <div className="flex items-center">
        <BackButton />
        <h1 className="text-xl ml-4">카드 추가</h1>
      </div>
      <div className="flex  justify-center my-7">
        <Card
          name={ownerName || 'NAME'}
          expiration={expirationDate.replace(/ /g, '')}
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
        />
      </div>

      <form className="relative">
        <InputContainer title={'카드 번호'} bgColor={'bg-gray-250'}>
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <>
                <Input
                  key={`cardNumber${index}`}
                  type={index > 1 ? 'password' : 'text'}
                  maxLength={4}
                  placeHolder={'0000'}
                  value={cardNumbers[index]}
                  onChange={(e) => handleCardNumbers(e, index)}
                />
                {index === 3 ? '' : <span>-</span>}
              </>
            ))}
          </>
        </InputContainer>

        <InputContainer title={'만료일'} width={'half'} bgColor={'bg-gray-250'}>
          <>
            <Input
              width={'quarter'}
              placeHolder={'MM'}
              type={'text'}
              maxLength={2}
              value={expiration.month}
              onChange={(e) => handleExpirationInput(e, 'month')}
            />
            <Input
              width={'quarter'}
              placeHolder={'YY'}
              type={'text'}
              maxLength={2}
              value={expiration.year}
              onChange={(e) => handleExpirationInput(e, 'year')}
            />
          </>
        </InputContainer>

        <InputContainer title={'카드 소유자 이름(선택)'} bgColor={'bg-gray-250'} count={ownerName.length}>
          <Input
            maxLength={30}
            placeHolder={'카드에 표시된 이름과 동일하게 입력하세요.'}
            value={ownerName}
            onChange={handleOwnerName}
            className={'text-left px-3'}
          />
        </InputContainer>

        <InputContainer title={'보안코드(CVC/CVV)'} width={'half'}>
          <>
            <Input type={'password'} maxLength={3} value={securityCode} onChange={handleSecurityCodeInput} />
            <Tooltip
              content={<img className="" src="images/CVC.png" alt="카드 뒷면 서명란 끝의 세자리 숫자입니다." />}
            />
          </>
        </InputContainer>

        <InputContainer title={'카드 비밀번호'} width={'half'}>
          <>
            <Input
              className={'mr-1.5'}
              width={'small'}
              type={'password'}
              maxLength={1}
              value={password.first}
              name={'first'}
              onChange={handlePasswordInput}
            />
            <Input
              className={'mr-1.5'}
              width={'small'}
              type={'password'}
              maxLength={1}
              value={password.second}
              name={'second'}
              onChange={handlePasswordInput}
            />
            <Input
              className={'mr-1.5 bg-opacity-0'}
              width={'small'}
              type={'password'}
              maxLength={1}
              value={'*'}
              disabled={true}
            />
            <Input
              className={'mr-1.5 bg-opacity-0'}
              width={'small'}
              type={'password'}
              maxLength={1}
              value={'*'}
              disabled={true}
            />
          </>
        </InputContainer>
        <TextButton text={'다음'} />
      </form>
    </div>
  );
};

export default CardAddPage;
