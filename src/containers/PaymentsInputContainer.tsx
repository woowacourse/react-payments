import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PaymentsInput from '../components/PaymentsInput';
import type { FormEvent } from 'react';

const PaymentsForm = styled.form`
  max-width: 318px;
  & > * {
    margin-bottom: 20px;
    :nth-child(2) {
      max-width: 138px;
    }
    :nth-child(4) {
      max-width: 112px;
    }
    :nth-child(5) {
      max-width: 100px;
    }
  }
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
  const navigate = useNavigate();
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    navigate('/');
  };
  return (
    <PaymentsForm onSubmit={handleForm}>
      <PaymentsInput title="카드 번호" inputAmount={4} maxLength={4} inputDivideLetter="-" />
      <PaymentsInput title="만료일" inputAmount={2} maxLength={2} inputDivideLetter="/" />
      <PaymentsInput title="카드 소유자 이름(선택)" inputAmount={1} maxLength={30} />
      <PaymentsInput title="보안 코드(CVC/CVV)" inputAmount={1} maxLength={3} />
      <PaymentsInput title="카드 비밀번호" inputAmount={2} maxLength={1} inputDivideLetter="" />
      <NextButton type="submit">다음</NextButton>
    </PaymentsForm>
  );
}

export default PaymentsInputContainer;
