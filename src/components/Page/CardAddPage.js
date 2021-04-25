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
  const [ownerName, setOwnerName] = useState('NAME');
  const [securityCode, setSsecurityCode] = useState(0);
  const [password, setPassword] = useState(0);
  const [cardNumbers, setCardNumbers] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
  });

  const handleCardNumbers = ({ target: { value } }, index) => {
    const numberReg = /^[0-9]{1,4}$/gi;
    if (!numberReg.test(Number(value))) {
      return;
    }
    setCardNumbers({ ...cardNumbers, [index]: value });
  };

  return (
    <div className="p-5">
      <div className="flex items-center">
        <BackButton />
        <h1 className="text-xl ml-4">카드 추가</h1>
      </div>
      <div className="flex  justify-center my-7">
        <Card name={ownerName} expiration={expirationDate} cardCompany={cardCompany} cardNumbers={cardNumbers} />
      </div>
      <form className="relative">
        <InputContainer title={'카드 번호'}>
          <div className="flex bg-gray-250 items-center font-gray-350">
            {Array.from({ length: 4 }).map((_, index) => (
              <Input
                key={`cardNumber${index}`}
                type={index > 1 ? 'password' : 'text'}
                maxLength={4}
                value={cardNumbers[index]}
                onChange={(e) => handleCardNumbers(e, index)}
              />
            ))}
          </div>
        </InputContainer>

        <InputContainer title={'만료일'}>
          <Input width={'half'} type={'number'} placeHolder={'MM / YY'} maxLength={4} />
        </InputContainer>

        <InputContainer title={'카드 소유자 이름(선택)'}>
          <Input maxLength={10} value={'밸류'} />
        </InputContainer>

        <InputContainer title={'보안코드(CVC/CVV)'}>
          <>
            <Input width={'quarter'} type={'number'} maxLength={3} />
            <Tooltip content={<img className="" src="images/CVC.png" alt="tooltip cvc images" />} />
          </>
        </InputContainer>

        <InputContainer title={'카드 비밀번호'}>
          <>
            <Input width={'small'} type={'number'} maxLength={1} />
            <Input width={'small'} type={'number'} maxLength={1} />
          </>
        </InputContainer>

        <TextButton text={'다음'} />
      </form>
    </div>
  );
};

export default CardAddPage;
