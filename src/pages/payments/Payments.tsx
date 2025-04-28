import styled from 'styled-components';
import ConditionalRender from '../../components/common/ConditionalRender/ConditionalRender';
import Dropdown from '../../components/common/Dropdown/Dropdown';
import FooterButton from '../../components/common/FooterButton/FooterButton';
import MobileLayoutContainer from '../../components/common/MobileLayoutContainer/MobileLayoutContainer';
import CardPreview from '../../components/features/payments/CardPreview/CardPreview';
import { CARD_BANK } from '../../components/features/payments/config/card';
import { INPUT_STEP } from '../../components/features/payments/config/step';
import usePaymentsForm from '../../components/features/payments/hooks/usePaymentsForm';
import CardNumberInputField from '../../components/features/payments/InputField/CardNumberInputField';
import CardPasswordInputField from '../../components/features/payments/InputField/CardPasswordInputField';
import CVCInputField from '../../components/features/payments/InputField/CVCInputField';
import ExpirationDateInputField from '../../components/features/payments/InputField/ExpirationDateInputField';
import InputSection from '../../components/features/payments/InputSection/InputSection';

function Payments() {
  const {
    paymentsFormValues,
    paymentsFormInputRefs,
    paymentsFormErrorTypes,
    paymentsFormHandlers,
    paymentFormBlurHandlers,
    inputStep,
    cardType,
    allInputComplete,
    handleSubmit,
  } = usePaymentsForm();

  return (
    <MobileLayoutContainer>
      <PaymentsContainer>
        <CardPreview
          cardNumberInputValue={paymentsFormValues.cardNumber}
          cardBank={paymentsFormValues.cardBank}
          expirationDateInputValue={paymentsFormValues.expirationDate}
          cardType={cardType}
        />
        <PaymentsInputForm>
          <ConditionalRender condition={inputStep >= INPUT_STEP.cardPassword}>
            <InputSection
              title="비밀번호를 입력해 주세요"
              caption="앞의 2자리를 입력해주세요"
            >
              <CardPasswordInputField
                inputValue={paymentsFormValues.cardPassword}
                inputRef={paymentsFormInputRefs.cardPassword}
                errorTypes={paymentsFormErrorTypes.cardPassword}
                handleInputValue={paymentsFormHandlers.cardPassword}
                onBlur={paymentFormBlurHandlers.cardPassword}
              />
            </InputSection>
          </ConditionalRender>

          <ConditionalRender condition={inputStep >= INPUT_STEP.CVC}>
            <InputSection title="CVC 번호를 입력해 주세요">
              <CVCInputField
                inputValue={paymentsFormValues.CVC}
                inputRef={paymentsFormInputRefs.CVC}
                errorTypes={paymentsFormErrorTypes.CVC}
                handleInputValue={paymentsFormHandlers.CVC}
                onBlur={paymentFormBlurHandlers.CVC}
              />
            </InputSection>
          </ConditionalRender>

          <ConditionalRender condition={inputStep >= INPUT_STEP.expirationDate}>
            <InputSection
              title="카드 유효기간을 입력해 주세요"
              caption="월/년도(MMYY)를 순서대로 입력해 주세요."
            >
              <ExpirationDateInputField
                inputValues={paymentsFormValues.expirationDate}
                inputRefs={paymentsFormInputRefs.expirationDate}
                handleInputValue={paymentsFormHandlers.expirationDate}
                onBlur={paymentFormBlurHandlers.expirationDate}
              />
            </InputSection>
          </ConditionalRender>

          <ConditionalRender condition={inputStep >= INPUT_STEP.cardBank}>
            <InputSection
              title="카드사를 선택해 주세요"
              caption="현재 국내 카드사만 가능합니다."
            >
              <Dropdown
                options={Object.entries(CARD_BANK).map(([key, value]) => ({
                  label: value.label,
                  value: key,
                }))}
                selectedValue={paymentsFormValues.cardBank}
                setSelectedValue={paymentsFormHandlers.cardBank}
                placeholder="카드사를 선택해주세요"
              />
            </InputSection>
          </ConditionalRender>

          <InputSection
            title="결제할 카드 번호를 입력해 주세요"
            caption="본인 명의의 카드만 결제 가능합니다."
          >
            <CardNumberInputField
              inputValues={paymentsFormValues.cardNumber}
              inputRefs={paymentsFormInputRefs.cardNumber}
              errorTypes={paymentsFormErrorTypes.cardNumber}
              handleInputValue={paymentsFormHandlers.cardNumber}
              onBlur={paymentFormBlurHandlers.cardNumber}
            />
          </InputSection>

          <ConditionalRender condition={allInputComplete}>
            <SubmitButtonWrapper>
              <FooterButton size="large" onClick={handleSubmit}>
                확인
              </FooterButton>
            </SubmitButtonWrapper>
          </ConditionalRender>
        </PaymentsInputForm>
      </PaymentsContainer>
    </MobileLayoutContainer>
  );
}

const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  min-height: 100vh;
`;

const PaymentsInputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubmitButtonWrapper = styled.div`
  position: sticky;
  bottom: 20px;
`;

export default Payments;
