/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import CreditCard from 'components/CreditCard';
import Input from 'components/Input';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import * as Type from 'types';
import * as S from './style';

type CreditCardPasswordType = { first: string, second: string };

// copied
const convertSecuredCreditCard = (number: string) => {
  const creditCardNumberLength = number.length;
  const securedCreditNumber = creditCardNumberLength <= 8
    ? number
    : number.slice(0, 8) + '●'.repeat(number.length - 8);
  return securedCreditNumber.split('').reduce((a, b, i) => {
    a[Math.floor(i / 4)].push(b);
    return a;
  }, [[], [], [], []] as string[][]);
};

function CreditCardRegister() {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);
  const [markedCreditCardNumber, setMarkedCreditCardNumber] = useState('');

  const [creditCardNumber, setCreditCardNumber] = useState('');
  const handleChangeCreditCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCreditCarNumber = event.target.value;

    if (newCreditCarNumber.length > 16) return;

    const markedNumber = convertSecuredCreditCard(newCreditCarNumber)
      .filter((numbers) => !!numbers.length)
      .map((numbers) => numbers.join(''))
      .join(' - ');

    setMarkedCreditCardNumber(markedNumber);
    setCreditCardNumber(newCreditCarNumber);
  };

  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const handleChangeCreditCardExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCardExpiry = event.target.value.replaceAll('/', '');

    if (newCardExpiry.length <= 2) setCreditCardExpiry(newCardExpiry);
    else if (newCardExpiry.length <= 4) {
      const newCardExpiryArray = newCardExpiry.split('');
      newCardExpiryArray.splice(2, 0, '/');
      setCreditCardExpiry(newCardExpiryArray.join(''));
    }
  };

  const [creditCardOwner, setCreditCardOwner] = useState('');
  const handleChangeCreditCardOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = (event.target.value).toUpperCase();
    if (newName.length <= 30) {
      setCreditCardOwner(newName);
    }
  };

  const [creditCardCVC, setCreditCardCVC] = useState('');
  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value;
    if (newCVC.length <= 3) {
      setCreditCardCVC(newCVC);
    }
  };

  const [creditCardPassword, setCreditCardPassword] = useState<CreditCardPasswordType>({ first: '', second: '' });
  const handleChangeCreditCardFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFirstPassword = event.target.value;
    if (newFirstPassword.length <= 1) {
      setCreditCardPassword({ ...creditCardPassword, first: event.target.value });
    }
  };

  const handleChangeCreditCardSecondPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSecondPassword = event.target.value;
    if (newSecondPassword.length <= 1) {
      setCreditCardPassword({ ...creditCardPassword, second: event.target.value });
    }
  };

  const [isFullFilled, setIsFullFilled] = useState(false);
  useEffect(() => {
    if (creditCardCVC === '') return setIsFullFilled(false);
    if (creditCardExpiry === '') return setIsFullFilled(false);
    if (creditCardCVC === '') return setIsFullFilled(false);
    if (creditCardPassword.first === '' || creditCardPassword.second === '') return setIsFullFilled(false);

    return setIsFullFilled(true);
  }, [creditCardNumber, creditCardExpiry, creditCardCVC, creditCardPassword]);

  const handleSubmit = () => {
    if (isFullFilled) {
      const newCreditCard: Type.CreditCard = {
        number: creditCardNumber,
        expiry: creditCardExpiry,
        owner: creditCardOwner,
        cvc: creditCardCVC,
        password: {
          first: creditCardPassword.first,
          second: creditCardPassword.second,
        },
      };
      alert(JSON.stringify(newCreditCard));
      navigate('/');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <S.CreditCardRegisterLayout>
      <S.CreditCardRegisterTopSheet>
        <S.HomeButton type="button" onClick={() => navigate('/')}>{`${'<'}`}</S.HomeButton>
        <S.CreditCardRegisterHeader>카드 추가</S.CreditCardRegisterHeader>
      </S.CreditCardRegisterTopSheet>
      <S.PreviewCreditCard>
        <CreditCard
          fullFilled={false}
          creditCard={{
            number: creditCardNumber,
            expiry: creditCardExpiry,
            owner: creditCardOwner,
          }}
        />
      </S.PreviewCreditCard>
      <S.CreditCardRegisterForm>
        <S.Box>
          <S.CreditCardRegisterLabel>카드 번호</S.CreditCardRegisterLabel>
          <Input
            type="string"
            value={markedCreditCardNumber}
            width="100%"
            textAlign="center"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
            onChange={() => { }}
          />
          <S.HiddentInput
            ref={inputRef}
            type="string"
            value={creditCardNumber}
            onChange={handleChangeCreditCardNumber}
          />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
          <Input placeholder="MM /YY" type="string" value={creditCardExpiry} width="40%" textAlign="center" onChange={handleChangeCreditCardExpiry} />
        </S.Box>
        <S.Box>
          <S.FlexBox justifyContent="space-between">
            <S.CreditCardRegisterLabel>카드 소유자 이름 (선택)</S.CreditCardRegisterLabel>
            <S.CreditCardRegisterLabel>
              {creditCardOwner.length}
              /30
            </S.CreditCardRegisterLabel>
          </S.FlexBox>
          <Input placeholder="카드에 표시된 이름과 동일하게 입력하세요." type="string" value={creditCardOwner} width="100%" textAlign="start" onChange={handleChangeCreditCardOwner} />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>
          <Input type="password" value={creditCardCVC} width="72px" textAlign="center" onChange={handleChangeCreditCardCVC} />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
          <S.FlexBox justifyContent="flex-start">
            <Input type="password" value={creditCardPassword?.first} width="48px" textAlign="center" onChange={handleChangeCreditCardFirstPassword} />
            <Input type="password" value={creditCardPassword?.second} width="48px" textAlign="center" onChange={handleChangeCreditCardSecondPassword} />
            <S.PasswordBox>•</S.PasswordBox>
            <S.PasswordBox>•</S.PasswordBox>
          </S.FlexBox>
        </S.Box>
        <S.ButtonWrapper>
          <S.ResigerButton disabled={!isFullFilled} type="button" onClick={() => handleSubmit()}>확인</S.ResigerButton>
        </S.ButtonWrapper>
      </S.CreditCardRegisterForm>
    </S.CreditCardRegisterLayout>
  );
}
export default CreditCardRegister;
