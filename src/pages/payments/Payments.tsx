import { useEffect, useState } from 'react';
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
import CardPasswordInputField from '../../components/features/payments/InputField/CardPasswordInputField';
import useCardPasswordValidation from '../../components/features/payments/hooks/useCardPasswordValidation';
import { CARD_BANK } from '../../components/features/payments/config/card';
import { INPUT_STEP } from '../../components/features/payments/config/step';
import { isAllTrue } from '../../utils/array';

function Payments() {
  const [inputStep, setInputStep] = useState(INPUT_STEP.cardNumber);
  const [allInputComplete, setAllInputComplete] = useState(false);
  const {
    inputValues: cardNumberInputValues,
    inputRefs: cardNumberInputRefs,
    errorTypes: cardNumberErrorTypes,
    cardType,
    isInputComplete: isCardNumberInputComplete,
    handleValue: handleCardNumberInputValue,
    onBlur: onCardNumberBlur,
  } = useCardNumberValidation();

  const [cardBankValue, setCardBankValue] = useState<DropdownOptionType | null>(
    null
  );
  const cardBankSelected = cardBankValue !== null;

  const {
    inputValues: expirationDateInputValues,
    inputRefs: expirationDateInputRefs,
    isInputComplete: isExpirationDateInputComplete,
    handleInputValue: handleExpirationDateInputValue,
    onBlur: onExpirationDateBlur,
  } = useExpirationDateValidation();

  const {
    inputValue: CVCInputValue,
    errorType: CVCErrorType,
    isInputComplete: isCVCInputComplete,
    handleInputValue: handleCVCInputValue,
    onBlur: onCVCInputBlur,
  } = useCVCValidation();

  const {
    inputValue: cardPasswordInputValue,
    errorType: cardPasswordErrorType,
    isInputComplete: isCardPasswordInputComplete,
    handleInputValue: handleCardPasswordInputValue,
    onBlur: onCardPasswordInputBlur,
  } = useCardPasswordValidation();

  useEffect(() => {
    if (inputStep === INPUT_STEP.cardNumber) {
      if (isCardNumberInputComplete) setInputStep(INPUT_STEP.cardBank);
    } else if (inputStep === INPUT_STEP.cardBank) {
      if (cardBankSelected) setInputStep(INPUT_STEP.expirationDate);
    } else if (inputStep === INPUT_STEP.expirationDate) {
      if (isExpirationDateInputComplete) setInputStep(INPUT_STEP.CVC);
    } else if (inputStep === INPUT_STEP.CVC) {
      if (isCVCInputComplete) setInputStep(INPUT_STEP.cardPassword);
    } else if (inputStep === INPUT_STEP.cardPassword) {
      const allTrue = isAllTrue([
        isCardNumberInputComplete,
        cardBankSelected,
        isExpirationDateInputComplete,
        isCVCInputComplete,
        isCardPasswordInputComplete,
      ]);
      if (allTrue) setAllInputComplete(true);
      else setAllInputComplete(false);
    }
  }, [
    isCardNumberInputComplete,
    cardBankSelected,
    isExpirationDateInputComplete,
    isCVCInputComplete,
    isCardPasswordInputComplete,
  ]);

  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview
          cardNumberInputValue={cardNumberInputValues}
          expirationDateInputValue={expirationDateInputValues}
          cardType={cardType}
          cardBank={cardBankValue}
        />
        <PaymentsInputForm>
          {inputStep >= 5 ? (
            <InputSection
              title="비밀번호를 입력해 주세요"
              caption="앞의 2자리를 입력해주세요"
            >
              <CardPasswordInputField
                inputValue={cardPasswordInputValue}
                errorTypes={cardPasswordErrorType}
                handleInputValue={handleCardPasswordInputValue}
                onBlur={onCardPasswordInputBlur}
              />
            </InputSection>
          ) : null}

          {inputStep >= 4 ? (
            <InputSection title="CVC 번호를 입력해 주세요">
              <CVCInputField
                inputValue={CVCInputValue}
                errorTypes={CVCErrorType}
                handleInputValue={handleCVCInputValue}
                onBlur={onCVCInputBlur}
              />
            </InputSection>
          ) : null}

          {inputStep >= 3 ? (
            <InputSection
              title="카드 유효기간을 입력해 주세요"
              caption="월/년도(MMYY)를 순서대로 입력해 주세요."
            >
              <ExpirationDateInputField
                inputValues={expirationDateInputValues}
                inputRefs={expirationDateInputRefs}
                handleInputValue={handleExpirationDateInputValue}
                onBlur={onExpirationDateBlur}
              />
            </InputSection>
          ) : null}

          {inputStep >= 2 ? (
            <InputSection
              title="카드사를 선택해 주세요"
              caption="현재 국내 카드사만 가능합니다."
            >
              <Dropdown
                options={Object.entries(CARD_BANK).map(([key, value]) => ({
                  label: value.label,
                  value: key,
                }))}
                selectedValue={cardBankValue}
                setSelectedValue={setCardBankValue}
                placeholder="카드사를 선택해주세요"
              />
            </InputSection>
          ) : null}

          <InputSection
            title="결제할 카드 번호를 입력해 주세요"
            caption="본인 명의의 카드만 결제 가능합니다."
          >
            <CardNumberInputField
              inputValues={cardNumberInputValues}
              inputRefs={cardNumberInputRefs}
              errorTypes={cardNumberErrorTypes}
              handleInputValue={handleCardNumberInputValue}
              onBlur={onCardNumberBlur}
            />
          </InputSection>

          {allInputComplete ? (
            <PaymentsSubmitButton>확인</PaymentsSubmitButton>
          ) : null}
        </PaymentsInputForm>
      </PaymentsContainer>
    </PaymentsLayout>
  );
}

const PaymentsLayout = styled.div`
  height: 100%;
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
  min-height: 100vh;
  background-color: white;
  border: 1px solid lightgray;
`;

const PaymentsInputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PaymentsSubmitButton = styled.button`
  position: sticky;
  bottom: 20px;
  cursor: pointer;
  width: 100%;
  padding: 20px;
  background-color: #333333;
  color: #f3f3f3;
  font-weight: 700;
  font-size: 16px;
  border: none;
`;

export default Payments;
