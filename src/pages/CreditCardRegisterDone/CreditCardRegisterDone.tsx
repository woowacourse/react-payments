import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import ControlButton from 'components/ControlButton';
import useCreditCardForm from 'hooks/useCreditCardForm';
import CreditCardRegisterLayout from 'components/CreditCardRegisterLayout';

function CreditCardRegisterDone() {
  const { creditCardForm } = useCreditCardForm();
  return (
    <CreditCardRegisterLayout>
      <div>카드 등록이 완료되었습니다.</div>
      <CreditCardNicknameInputForm creditCardForm={creditCardForm} />
      <ControlButton
        onClick={() => alert('ㅎㅇ')}
        label="확인"
      />
    </CreditCardRegisterLayout>
  );
}
export default CreditCardRegisterDone;
