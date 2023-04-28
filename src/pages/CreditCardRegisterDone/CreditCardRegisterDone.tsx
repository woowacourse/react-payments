import CreditCardNicknameInputForm from 'components/CreditCardNicknameInputForm';
import ControlButton from 'components/ControlButton';
import useCreditCardForm from 'hooks/useCreditCardForm';

function CreditCardRegisterDone() {
  const { creditCardForm } = useCreditCardForm();
  return (
    <div>
      <div>카드 등록이 완료되었습니다.</div>
      <CreditCardNicknameInputForm creditCardForm={creditCardForm} />
      <ControlButton
        onClick={() => alert('ㅎㅇ')}
        label="확인"
      />
    </div>
  );
}
export default CreditCardRegisterDone;
