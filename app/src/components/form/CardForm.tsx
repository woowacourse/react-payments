import styled from '@emotion/styled';
import { CardSection } from './CardSection';
import { CardSelectionDropdown } from './CardSelectionDropdown';
import { CardNumberInput } from './CardNumberInput';
import { CardExpiryDateInput } from './CardExpiryDateInput';
import { CardCVCInput } from './CardCVCInput';
import { CardPasswordInput } from './CardPasswordInput';
import { ConfirmButton } from './ConfirmButton';
import { useCardContext } from '../../hooks/useCardContext';
import { BrandValidator } from '../../validators/BrandValidator';
import { useNavigate } from 'react-router-dom';
import { useFormFocusChain } from '../../hooks/useFormFocusChain';

export function CardForm() {
  const { cardCompany, cardNumber, cardExpiryDate, cardCVC, cardPassword } = useCardContext();
  const networkBrand = BrandValidator.detectNetworkBrand(cardNumber.join('')).brand;
  const lastDigitLength = networkBrand === 'diners' ? 2 : networkBrand === 'amex' ? 3 : 4;

  const isFormComplete =
    cardCompany !== '' &&
    cardNumber[0].length === 4 &&
    cardNumber[1].length === 4 &&
    cardNumber[2].length === 4 &&
    cardNumber[3].length === lastDigitLength &&
    cardExpiryDate['expiry-month'].length === 2 &&
    cardExpiryDate['expiry-year'].length === 2 &&
    cardCVC.length === 3 &&
    cardPassword.length === 2;

  const {
    refs,
    onCardCompanySelected,
    onCardNumberComplete,
    onCardExpiryDateComplete,
    onCardCVCComplete,
  } = useFormFocusChain();

  const navigate = useNavigate();

  return (
    <CardFormContainer
      onSubmit={(e) => {
        e.preventDefault();
        navigate('/react-payments/complete', {
          state: { firstDigits: cardNumber[0], cardCompany: cardCompany },
        });
      }}
    >
      <CardSection title={'카드사를 선택해 주세요'} subTitle={'현재 국내 카드사만 가능합니다.'}>
        <CardSelectionDropdown onSelect={onCardCompanySelected} />
      </CardSection>
      <CardSection
        title={'결제할 카드 번호를 입력해 주세요'}
        subTitle={'본인 명의의 카드만 결제 가능합니다.'}
      >
        <CardNumberInput firstRef={refs.cardNumberFirstRef} onComplete={onCardNumberComplete} />
      </CardSection>
      <CardSection
        title={'카드 유효기간을 입력해 주세요'}
        subTitle={'월/년도(MMYY)를 순서대로 입력해 주세요.'}
      >
        <CardExpiryDateInput
          firstRef={refs.cardExpiryDateFirstRef}
          onComplete={onCardExpiryDateComplete}
        />
      </CardSection>
      <CardSection title={'CVC 번호를 입력해 주세요'}>
        <CardCVCInput cardCVCRef={refs.cardCVCRef} onComplete={onCardCVCComplete} />
      </CardSection>
      <CardSection title={'비밀번호를 입력해 주세요'} subTitle={'앞의 2자리를 입력해주세요'}>
        <CardPasswordInput cardPasswordRef={refs.cardPasswordRef} />
      </CardSection>
      <ConfirmButton isFormComplete={isFormComplete} />
    </CardFormContainer>
  );
}

const CardFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 24px 30px 20px 30px;
  box-sizing: border-box;
`;
