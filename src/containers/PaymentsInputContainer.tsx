import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PaymentsInput from '../components/PaymentsInput';
import type { ChangeEvent, FormEvent } from 'react';

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

interface PaymentInputContainerProps {
  setCardInformation: {
    setCardNumber: (index: number, value: string) => void;
    setExpirationDate: (index: number, value: string) => void;
    setOwner: (value: string) => void;
  };
}

function PaymentsInputContainer({ setCardInformation }: PaymentInputContainerProps) {
  const { setCardNumber, setExpirationDate, setOwner } = setCardInformation;
  const navigate = useNavigate();
  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const onChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const index = target.getAttribute('data-index');

    setCardNumber(Number(index), target.value);
  };

  const onChangeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const index = target.getAttribute('data-index');

    setExpirationDate(Number(index), target.value);
  };

  const onChangeOwner = (e: ChangeEvent<HTMLInputElement>) => {
    setOwner(e.target.value);
  };

  return (
    <PaymentsForm onSubmit={handleForm}>
      <PaymentsInput
        title="카드 번호"
        inputAmount={4}
        maxLength={4}
        inputDivideLetter="-"
        dataId="cardNumber"
        onChange={onChangeCardNumber}
      />
      <PaymentsInput
        title="만료일"
        inputAmount={2}
        maxLength={2}
        inputDivideLetter="/"
        dataId="expirationDate"
        onChange={onChangeExpirationDate}
      />
      <PaymentsInput
        title="카드 소유자 이름(선택)"
        inputAmount={1}
        maxLength={30}
        dataId="owner"
        onChange={onChangeOwner}
      />
      <PaymentsInput title="보안 코드(CVC/CVV)" inputAmount={1} maxLength={3} />
      <PaymentsInput title="카드 비밀번호" inputAmount={2} maxLength={1} inputDivideLetter="" />
      <NextButton type="submit">다음</NextButton>
    </PaymentsForm>
  );
}

export default PaymentsInputContainer;
