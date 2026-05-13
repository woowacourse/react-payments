import CardPreview from '../components/cardPreview/CardPreview';
import CardNumberSection from '../components/cardNumberSection/CardNumberSection';
import ExpirationDateSection from '../components/expirationDateSection/ExpirationDateSection';
import CvcSection from '../components/cvcSection/CvcSection';
import CardCompanySection from '../components/cardCompanySection/CardCompanySection';
import PasswordSection from '../components/passwordSection/PasswordSection';
import { useNavigate } from 'react-router-dom';
import { FormLayout, SubmitButton } from './CardAddPage.styles';
import { useCardFormState } from './useCardFormState';
import { useCardFormValidation } from './useCardFormValidation';

const CardAddPage = () => {
  const navigate = useNavigate();
  const { formState, setters } = useCardFormState();
  const { isFormValid, canShowSteps } = useCardFormValidation(formState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    // 라우팅 페이지 연결
    navigate('/card-add-success', {
      state: {
        cardNumberPrefixFourth: formState.cardNumber[0],
        cardCompany: formState.cardCompany,
      },
    });
  };

  return (
    <>
      <CardPreview
        cardNumber={formState.cardNumber}
        expirationDate={formState.expirationDate}
        cardCompany={formState.cardCompany}
      />
      <FormLayout onSubmit={handleSubmit}>
        {canShowSteps.canShowPassword && (
          <PasswordSection value={formState.password} setValue={setters.setPassword} />
        )}
        {canShowSteps.canShowCvc && <CvcSection value={formState.cvc} setValue={setters.setCvc} />}
        {canShowSteps.canShowExpirationDate && (
          <ExpirationDateSection
            value={formState.expirationDate}
            setValue={setters.setExpirationDate}
          />
        )}
        {canShowSteps.canShowCompany && (
          <CardCompanySection value={formState.cardCompany} setValue={setters.setCardCompany} />
        )}
        <CardNumberSection value={formState.cardNumber} setValue={setters.setCardNumber} />

        {isFormValid && <SubmitButton type="submit">확인</SubmitButton>}
      </FormLayout>
    </>
  );
};

export default CardAddPage;
