import PaymentsInput from '../components/PaymentsInput';

function PaymentsInputContainer() {
  return (
    <div>
      <PaymentsInput title="카드 번호" inputAmount={4} maxLength={4} inputDivideLetter="-" />
      <PaymentsInput title="만료일" inputAmount={2} maxLength={2} inputDivideLetter="/" />
      <PaymentsInput title="카드 소유자 이름(선택)" inputAmount={1} maxLength={30} inputDivideLetter={null} />
      <PaymentsInput title="보안 코드(CVC/CVV)" inputAmount={1} maxLength={3} inputDivideLetter={null} />
      <PaymentsInput title="카드 비밀번호" inputAmount={2} maxLength={1} inputDivideLetter="" />
    </div>
  );
}

export default PaymentsInputContainer;
