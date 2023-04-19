/* eslint-disable max-len */
import CreditCard from 'components/CreditCard';
import Input from 'components/Input';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './style';

type CreditCardPasswordType = { first: string, second: string };

function CreditCardRegister() {
  const navigate = useNavigate();
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const handleChangeCreditCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditCardNumber(event.target.value);
  };
  const [creditCardExpiry, setCreditCardExpiry] = useState('');
  const handleChangeCreditCardExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditCardExpiry(event.target.value);
  };
  const [creditCardOwner, setCreditCardOwner] = useState('');
  const handleChangeCreditCardOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditCardOwner(event.target.value);
  };
  const [creditCardCVC, setCreditCardCVC] = useState('');
  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditCardCVC(event.target.value);
  };
  const [creditCardPassword, setCreditCardPassword] = useState<CreditCardPasswordType>({ first: '', second: '' });
  const handleChangeCreditCardFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditCardPassword({ ...creditCardPassword, first: event.target.value });
  };
  const handleChangeCreditCardSecondPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreditCardPassword({ ...creditCardPassword, second: event.target.value });
  };

  const [isFullFilled, setIsFullFilled] = useState(false);
  useEffect(() => {
    if (creditCardCVC === '') return setIsFullFilled(false);
    if (creditCardExpiry === '') return setIsFullFilled(false);
    if (creditCardCVC === '') return setIsFullFilled(false);
    if (creditCardPassword.first === '' || creditCardPassword.second === '') return setIsFullFilled(false);

    return setIsFullFilled(true);
  }, [creditCardNumber, creditCardExpiry, creditCardCVC, creditCardPassword]);

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
          <Input type="string" value={creditCardNumber} width="100%" textAlign="center" onChange={handleChangeCreditCardNumber} />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
          <Input type="string" value={creditCardExpiry} width="40%" textAlign="center" onChange={handleChangeCreditCardExpiry} />
        </S.Box>
        <S.Box>
          <S.FlexBox>
            <S.CreditCardRegisterLabel>카드 소유자 이름 (선택)</S.CreditCardRegisterLabel>
            <S.CreditCardRegisterLabel>
              {creditCardOwner.length}
              /30
            </S.CreditCardRegisterLabel>
          </S.FlexBox>
          <Input type="string" value={creditCardOwner} width="100%" textAlign="start" onChange={handleChangeCreditCardOwner} />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>
          <Input type="string" value={creditCardCVC} width="72px" textAlign="center" onChange={handleChangeCreditCardCVC} />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
          <Input type="string" value={creditCardPassword?.first} width="48px" textAlign="center" onChange={handleChangeCreditCardFirstPassword} />
          <Input type="string" value={creditCardPassword?.second} width="48px" textAlign="center" onChange={handleChangeCreditCardSecondPassword} />
          <Input type="string" value="*" width="48px" textAlign="center" onChange={() => { }} />
          <Input type="string" value="*" width="48px" textAlign="center" onChange={() => { }} />
        </S.Box>
        <S.ButtonWrapper>
          <S.ResigerButton disabled={!isFullFilled} type="submit" onClick={() => navigate('/')}>확인</S.ResigerButton>
        </S.ButtonWrapper>
      </S.CreditCardRegisterForm>
    </S.CreditCardRegisterLayout>
  );
}
export default CreditCardRegister;
