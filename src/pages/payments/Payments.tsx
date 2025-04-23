import { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../../components/common/Dropdown/Dropdown';
import CardPreview from '../../components/features/payments/CardPreview/CardPreview';
import useCardNumberValidation from '../../components/features/payments/hooks/useCardNumberValidation';
import useCVCValidation from '../../components/features/payments/hooks/useCVCValidation';
import useExpirationDateValidation from '../../components/features/payments/hooks/useExpirationDateValidation';
import CardNumberInputField from '../../components/features/payments/InputField/CardNumberInputField';
import CVCInputField from '../../components/features/payments/InputField/CVCInputField';
import ExpirationDateInputField from '../../components/features/payments/InputField/ExpirationDateInputField';
import InputSection from '../../components/features/payments/InputSection/InputSection';
import { DropdownOptionType } from '../../types/dropdown';

function Payments() {
  const {
    inputValues: cardNumberInputValues,
    errorTypes: cardNumberErrorTypes,
    cardType,
    handleValue: handleCardNumberInputValue,
    onBlur: onCardNumberBlur,
  } = useCardNumberValidation();

  const [cardBankValue, setCardBankValue] = useState<DropdownOptionType | null>(
    null
  );

  const {
    inputValues: expirationDateInputValues,
    handleInputValue: handleExpirationDateInputValue,
    onBlur: onExpirationDateBlur,
  } = useExpirationDateValidation();

  const {
    inputValue: CVCInputValue,
    errorType: CVCErrorType,
    handleInputValue: handleCVCInputValue,
    onBlur: onCVCInputBlur,
  } = useCVCValidation();

  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview
          cardNumberInputValue={cardNumberInputValues}
          expirationDateInputValue={expirationDateInputValues}
          cardType={cardType}
        />
        <InputSection
          title="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
        >
          <CardNumberInputField
            inputValues={cardNumberInputValues}
            errorTypes={cardNumberErrorTypes}
            handleInputValue={handleCardNumberInputValue}
            onBlur={onCardNumberBlur}
          />
        </InputSection>
        <InputSection
          title="카드사를 선택해 주세요"
          caption="현재 국내 카드사만 가능합니다."
        >
          <Dropdown
            options={[
              { label: 'BC카드', value: 'bc' },
              { label: '신한카드', value: 'shinhan' },
              { label: '카카오뱅크', value: 'kakao' },
              { label: '현대카드', value: 'hyundai' },
              { label: '우리카드', value: 'woori' },
              { label: '롯데카드', value: 'lotte' },
              { label: '하나카드', value: 'hana' },
              { label: '국민카드', value: 'kookmin' },
            ]}
            selectedValue={cardBankValue}
            setSelectedValue={setCardBankValue}
            placeholder="카드사를 선택해주세요"
          />
        </InputSection>
        <InputSection
          title="카드 유효기간을 입력해 주세요"
          caption="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpirationDateInputField
            inputValues={expirationDateInputValues}
            handleInputValue={handleExpirationDateInputValue}
            onBlur={onExpirationDateBlur}
          />
        </InputSection>
        <InputSection title="CVC 번호를 입력해 주세요">
          <CVCInputField
            inputValue={CVCInputValue}
            errorTypes={CVCErrorType}
            handleInputValue={handleCVCInputValue}
            onBlur={onCVCInputBlur}
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
