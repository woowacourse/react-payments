import styled from 'styled-components';
import PaymentsInput from '../components/PaymentsInput';

const PaymentsForm = styled.form`
  max-width: 318px;
`;

const NextButton = styled.button`
  margin-top: 8px;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  float: right;
`;

function PaymentsInputContainer() {
  return (
    <PaymentsForm>
      <PaymentsInput title="카드 번호" inputAmount={4} maxLength={4} inputDivideLetter="-" />
      <PaymentsInput title="만료일" inputAmount={2} maxLength={2} inputDivideLetter="/" />
      <PaymentsInput title="카드 소유자 이름(선택)" inputAmount={1} maxLength={30} inputDivideLetter={null} />
      <PaymentsInput title="보안 코드(CVC/CVV)" inputAmount={1} maxLength={3} inputDivideLetter={null} />
      <PaymentsInput title="카드 비밀번호" inputAmount={2} maxLength={1} inputDivideLetter="" />

      <NextButton type="button">다음</NextButton>
    </PaymentsForm>
  );
}

export default PaymentsInputContainer;
