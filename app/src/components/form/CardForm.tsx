import styled from '@emotion/styled';
import { CardSection } from './CardSection';
import { CardSelectionDropdown } from './CardSelectionDropdown';
import { CardNumberInput } from './CardNumberInput';
import { CardExpiryDateInput } from './CardExpiryDateInput';
import { CardCVCInput } from './CardCVCInput';
import { CardPasswordInput } from './CardPasswordInput';
import { ConfirmButton } from './ConfirmButton';
import type { CardFormPropsType } from '../../types/cardFormProps';

export function CardForm({
  refs,
  currentStep,
  isFormComplete,
  serverError,
  onCardNumberComplete,
  onCardCompanySelected,
  onCardExpiryDateComplete,
  onCardCVCComplete,
  handleFormSubmit,
}: CardFormPropsType) {
  return (
    <CardFormContainer onSubmit={handleFormSubmit}>
      <CardSection
        title={'결제할 카드 번호를 입력해 주세요'}
        subTitle={'본인 명의의 카드만 결제 가능합니다.'}
      >
        <CardNumberInput
          firstRef={refs.cardNumberFirstRef}
          onCardNumberComplete={onCardNumberComplete}
          serverError={serverError}
        />
      </CardSection>
      {currentStep >= 1 && (
        <CardSection title={'카드사를 선택해 주세요'} subTitle={'현재 국내 카드사만 가능합니다.'}>
          <CardSelectionDropdown onSelect={onCardCompanySelected} />
        </CardSection>
      )}
      {currentStep >= 2 && (
        <CardSection
          title={'카드 유효기간을 입력해 주세요'}
          subTitle={'월/년도(MMYY)를 순서대로 입력해 주세요.'}
        >
          <CardExpiryDateInput
            expiryMonthRef={refs.expiryMonthRef}
            onCardExpiryDateComplete={onCardExpiryDateComplete}
            serverError={serverError}
          />
        </CardSection>
      )}
      {currentStep >= 3 && (
        <CardSection title={'CVC 번호를 입력해 주세요'}>
          <CardCVCInput
            cardCVCRef={refs.cardCVCRef}
            onCardCVCComplete={onCardCVCComplete}
            serverError={serverError}
          />
        </CardSection>
      )}
      {currentStep >= 4 && (
        <CardSection title={'비밀번호를 입력해 주세요'} subTitle={'앞의 2자리를 입력해주세요'}>
          <CardPasswordInput cardPasswordRef={refs.cardPasswordRef} />
        </CardSection>
      )}
      <ConfirmButton isFormComplete={isFormComplete} />
    </CardFormContainer>
  );
}

const CardFormContainer = styled.form`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 1rem;
  padding: 24px 30px 20px 30px;
  box-sizing: border-box;
  flex: 1;
  overflow-y: auto;
`;
