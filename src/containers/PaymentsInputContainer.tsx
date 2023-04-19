import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CardInformation } from '../components/Card';
import PaymentsInput from '../components/PaymentsInput';
import useWrappingContext from '../hooks/useWrappingContext';
import CardListStore from '../store';
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
  const { dispatchCardList } = useWrappingContext(CardListStore);
  const navigate = useNavigate();
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { currentTarget } = e;
    const formData = new FormData(currentTarget);
    const owner = formData.get('owner');
    const cardNumber = formData.getAll('cardNumber');
    const expirationDate = formData.getAll('expirationDate');
    const cardInformation = {
      owner,
      cardNumber,
      expirationDate: { month: expirationDate[0], year: expirationDate[1] },
    };
    dispatchCardList(cardInformation as CardInformation);
    navigate('/');
  };

  const onChangeCardNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const index = target.getAttribute('data-index');
    target.value = target.value.replace(/[^0-9]/g, '');

    setCardNumber(Number(index), target.value);
  };

  const onChangeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const index = target.getAttribute('data-index');
    target.value = target.value.replace(/[^0-9]/g, '');

    setExpirationDate(Number(index), target.value);
  };

  const onChangeOwner = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    target.value = target.value.replace(/[^a-z|A-Z|ㄱ-ㅎ|가-힣]/g, '');

    setOwner(target.value);
  };

  const onChangeCVC = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    target.value = target.value.replace(/[^0-9]/g, '');
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    target.value = target.value.replace(/[^0-9]/g, '');
  };

  return (
    <PaymentsForm onSubmit={handleForm}>
      <PaymentsInput
        title="카드 번호"
        inputInformationList={[
          { type: 'text', isRequired: true, maxLength: 4, name: 'cardNumber' },
          { type: 'text', isRequired: true, maxLength: 4, name: 'cardNumber' },
          { type: 'password', isRequired: true, maxLength: 4, name: 'cardNumber' },
          { type: 'password', isRequired: true, maxLength: 4, name: 'cardNumber' },
        ]}
        inputDivideLetter="-"
        onChange={onChangeCardNumber}
      />
      <PaymentsInput
        title="만료일"
        inputInformationList={[
          { type: 'text', isRequired: true, maxLength: 2, name: 'expirationDate' },
          { type: 'text', isRequired: true, maxLength: 2, name: 'expirationDate' },
        ]}
        inputDivideLetter="/"
        onChange={onChangeExpirationDate}
      />
      <PaymentsInput
        title="카드 소유자 이름(선택)"
        inputInformationList={[{ type: 'text', isRequired: false, maxLength: 30, name: 'owner' }]}
        onChange={onChangeOwner}
      />
      <PaymentsInput
        title="보안 코드(CVC/CVV)"
        inputInformationList={[{ type: 'password', isRequired: true, maxLength: 3, name: 'securityCode' }]}
        onChange={onChangeCVC}
      />
      <PaymentsInput
        title="카드 비밀번호"
        inputInformationList={[
          { type: 'password', isRequired: true, maxLength: 1, name: 'cardPassword' },
          { type: 'password', isRequired: true, maxLength: 1, name: 'cardPassword' },
        ]}
        inputDivideLetter=""
        onChange={onChangePassword}
      />
      <NextButton type="submit">다음</NextButton>
    </PaymentsForm>
  );
}

export default PaymentsInputContainer;
