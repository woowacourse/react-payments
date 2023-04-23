import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CardInformation } from '../components/Card';
import PaymentsInput from '../components/PaymentsInput';
import QuestionToolTip from '../components/QuestionToolTip';
import checkExpirationDate from '../domain/validator';
import useWrappingContext from '../hooks/useWrappingContext';
import CardListStore from '../store';
import type { ChangeEvent, FormEvent } from 'react';

const CVC_MESSAGE = 'CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다.';

const PaymentsForm = styled.form`
  max-width: 318px;
  & > * {
    margin-bottom: 20px;
    :nth-child(2) {
      max-width: 138px;
    }
    :nth-child(5) {
      max-width: 100px;
    }
  }
`;

const PaymentsInputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
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
  setCardNumber: (index: number, value: string) => void;
  setExpirationDate: (index: number, value: string) => void;
  setOwner: (value: string) => void;
}

function PaymentsInputContainer({ setCardNumber, setExpirationDate, setOwner }: PaymentInputContainerProps) {
  const { dispatchCardList } = useWrappingContext(CardListStore);
  const navigate = useNavigate();
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { currentTarget } = e;
    const formData = new FormData(currentTarget);
    const owner = formData.get('owner');
    const cardNumber = formData.getAll('cardNumber');
    const expirationDate = formData.getAll('expirationDate');
    try {
      checkExpirationDate(expirationDate as [string, string]);
    } catch (error) {
      alert(error);
      return;
    }

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
    target.value = target.value.replace(/[^a-z|A-Z]/g, '').toUpperCase();

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
          { type: 'text', isRequired: true, pattern: [4, 4], name: 'cardNumber', placeholder: '1234' },
          { type: 'text', isRequired: true, pattern: [4, 4], name: 'cardNumber', placeholder: '1234' },
          { type: 'password', isRequired: true, pattern: [4, 4], name: 'cardNumber', placeholder: '1234' },
          { type: 'password', isRequired: true, pattern: [4, 4], name: 'cardNumber', placeholder: '1234' },
        ]}
        inputDivideLetter="-"
        onChange={onChangeCardNumber}
      />
      <PaymentsInput
        title="만료일"
        inputInformationList={[
          { type: 'text', isRequired: true, pattern: [2, 2], name: 'expirationDate', placeholder: 'MM' },
          { type: 'text', isRequired: true, pattern: [2, 2], name: 'expirationDate', placeholder: 'YY' },
        ]}
        inputDivideLetter="/"
        onChange={onChangeExpirationDate}
      />
      <PaymentsInput
        title="카드 소유자 이름(선택)"
        inputInformationList={[
          {
            type: 'text',
            isRequired: false,
            pattern: [0, 30],
            name: 'owner',
            placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
          },
        ]}
        onChange={onChangeOwner}
      />
      <PaymentsInputWrapper>
        <PaymentsInput
          title="보안 코드(CVC/CVV)"
          inputInformationList={[{ type: 'password', isRequired: true, pattern: [3, 3], name: 'securityCode' }]}
          onChange={onChangeCVC}
        />
        <QuestionToolTip questionMessage={CVC_MESSAGE} />
      </PaymentsInputWrapper>
      <PaymentsInput
        title="카드 비밀번호"
        inputInformationList={[{ type: 'password', isRequired: true, pattern: [4, 4], name: 'cardPassword' }]}
        inputDivideLetter=""
        onChange={onChangePassword}
      />
      <NextButton type="submit">다음</NextButton>
    </PaymentsForm>
  );
}

export default PaymentsInputContainer;
