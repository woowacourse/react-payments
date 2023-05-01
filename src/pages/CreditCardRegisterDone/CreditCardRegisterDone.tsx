import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import CreditCardRegisterLayout from 'components/CreditCardRegisterLayout';
import * as S from './style';

function CreditCardRegisterDone() {
  return (
    <CreditCardRegisterLayout>
      <S.CreditCardRegisterTitle>
        <S.CreditCardRegisterTitleFont>카드 등록이 완료되었습니다.</S.CreditCardRegisterTitleFont>
      </S.CreditCardRegisterTitle>
      <CreditCardNicknameInputForm />
    </CreditCardRegisterLayout>
  );
}
export default CreditCardRegisterDone;
