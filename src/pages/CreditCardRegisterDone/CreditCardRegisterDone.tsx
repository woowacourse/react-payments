import ControlButton from 'components/ControlButton';

function CreditCardRegisterDone() {
  return (
    <div>
      <div>카드 등록이 완료되었습니다.</div>
      <ControlButton
        onClick={() => alert('ㅎㅇ')}
        label="확인"
      />
    </div>
  );
}
export default CreditCardRegisterDone;
