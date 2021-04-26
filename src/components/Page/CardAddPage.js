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
  const [securityCode, setSecurityCode] = useState(0);
  const [password, setPassword] = useState(0);
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

        <div className="flex">
          <InputContainer title={'보안코드(CVC/CVV)'} width={'half'}>
            <>
              <Input type={'password'} maxLength={3} />
              <Tooltip content={<img className="" src="images/CVC.png" alt="tooltip cvc images" />} />
            </>
          </InputContainer>
        </div>
        <InputContainer title={'카드 비밀번호'} width={'quarter'}>
          <>
            <Input width={'small'} type={'password'} placeHolder={'*'} maxLength={1} />
            <Input width={'small'} type={'password'} placeHolder={'*'} maxLength={1} />
          </>
        </InputContainer>
        <TextButton text={'다음'} />
      </form>
    </div>
  );
};

export default CardAddPage;
