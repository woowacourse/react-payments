import { useState } from 'react';
import styled from 'styled-components';
import {
  CVCInputValueType,
  ExpirationDateInputType,
} from '../../components/features/payments/config/inputField';
import useCardNumberValidation from '../../components/features/payments/hooks/useCardNumberValidation';
import CardNumberInputField from '../../components/features/payments/InputField/CardNumberInputField';
import CVCInputField from '../../components/features/payments/InputField/CVCInputField';
import ExpirationDateInputField from '../../components/features/payments/InputField/ExpirationDateInputField';
import InputSection from '../../components/features/payments/InputSection/InputSection';
import CardPreview from '../../components/features/payments/CardPreview/CardPreview';

function Payments() {
  const { inputValues, errorTypes, handleValue, onBlur, cardType } =
    useCardNumberValidation();

  const [expirationDateInputValue, setExpirationDateInputValue] = useState<
    Record<ExpirationDateInputType, string>
  >({
    expirationDatePart1: '',
    expirationDatePart2: '',
  });

  const [CVCInputValue, setCVCInputValue] = useState<
    Record<CVCInputValueType, string>
  >({
    CVCPart1: '',
  });

  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview
          cardNumberInputValue={inputValues}
          expirationDateInputValue={expirationDateInputValue}
          cardType={cardType}
        />
        <InputSection
          title="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
        >
          <CardNumberInputField
            inputValues={inputValues}
            errorTypes={errorTypes}
            handleValue={handleValue}
            onBlur={onBlur}
          />
        </InputSection>
        <InputSection
          title="카드 유효기간을 입력해 주세요"
          caption="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpirationDateInputField
            inputValue={expirationDateInputValue}
            setInputValue={setExpirationDateInputValue}
          />
        </InputSection>
        <InputSection title="CVC 번호를 입력해 주세요">
          <CVCInputField
            inputValue={CVCInputValue}
            setInputValue={setCVCInputValue}
          />
        </InputSection>
      </PaymentsContainer>
    </PaymentsLayout>
  );
}

const PaymentsLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  align-items: center;
  width: 376px;
  min-height: 100%;
  background-color: white;
  border: 1px solid lightgray;
`;

export default Payments;
