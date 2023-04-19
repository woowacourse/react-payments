import CreditCard from 'components/CreditCard';
import Input from 'components/Input';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

function CreditCardRegister() {
  const navigate = useNavigate();
  return (
    <S.CreditCardRegisterLayout>
      <S.CreditCardRegisterTopSheet>
        <S.HomeButton type="button" onClick={() => navigate('/')}>{`${'<'}`}</S.HomeButton>
        <S.CreditCardRegisterHeader>카드 추가</S.CreditCardRegisterHeader>
      </S.CreditCardRegisterTopSheet>
      <S.PreviewCreditCard>
        <CreditCard
          fullFilled
          creditCard={{
            number: '1234123412341234',
            expiry: '03/45',
            owner: 'NOAH',
          }}
        />
      </S.PreviewCreditCard>
      <S.CreditCardRegisterForm>
        <S.Box>
          <S.CreditCardRegisterLabel>카드 번호</S.CreditCardRegisterLabel>
          <Input type="string" value="1111-" width="100%" textAlign="center" onChange={() => { }} />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>만료일</S.CreditCardRegisterLabel>
          <Input type="string" value="MM/YY" width="40%" textAlign="center" onChange={() => { }} />
        </S.Box>
        <S.Box>
          <S.FlexBox>
            <S.CreditCardRegisterLabel>카드 소유자 이름 (선택)</S.CreditCardRegisterLabel>
            <S.CreditCardRegisterLabel>0/30</S.CreditCardRegisterLabel>
          </S.FlexBox>
          <Input type="string" value="NAME" width="100%" textAlign="start" onChange={() => { }} />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>보안 코드(CVC/CVV)</S.CreditCardRegisterLabel>
          <Input type="string" value="***" width="48px" textAlign="center" onChange={() => { }} />
        </S.Box>
        <S.Box>
          <S.CreditCardRegisterLabel>카드 비밀번호</S.CreditCardRegisterLabel>
          <Input type="string" value="" width="24px" textAlign="center" onChange={() => { }} />
          <Input type="string" value="" width="24px" textAlign="center" onChange={() => { }} />
          <Input type="string" value="*" width="24px" textAlign="center" onChange={() => { }} />
          <Input type="string" value="*" width="24px" textAlign="center" onChange={() => { }} />
        </S.Box>
        <S.ButtonWrapper>
          <S.ResigerButton type="submit" onClick={() => navigate('/')}>확인</S.ResigerButton>
        </S.ButtonWrapper>
      </S.CreditCardRegisterForm>
    </S.CreditCardRegisterLayout>
  );
}
export default CreditCardRegister;
