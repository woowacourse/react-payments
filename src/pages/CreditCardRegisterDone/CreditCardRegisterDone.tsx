import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import * as S from './style';

function CreditCardRegisterDone() {
  return (
    <>
      <S.CreditCardRegisterTitle>
        <S.CreditCardRegisterTitleFont>
          카드 등록이 완료되었습니다.
        </S.CreditCardRegisterTitleFont>
      </S.CreditCardRegisterTitle>
      <CreditCardNicknameInputForm />
    </>
  );
}
export default CreditCardRegisterDone;
