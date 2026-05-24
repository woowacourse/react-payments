import CardPreview from '../../components/cardPreview/CardPreview';
import CardNumberSection from '../../components/cardNumberSection/CardNumberSection';
import ExpirationDateSection from '../../components/expirationDateSection/ExpirationDateSection';
import CvcSection from '../../components/cvcSection/CvcSection';
import CardCompanySection from '../../components/cardCompanySection/CardCompanySection';
import PasswordSection from '../../components/passwordSection/PasswordSection';
import { FormLayout, SubmitButton } from './CardAddPage.styles';
import { useCardFormState } from './useCardFormState';
import { useCardFormValidation } from './useCardFormValidation';
import { useCardSubmit } from './useCardSubmit';

const CardAddPage = () => {
  const { formState, setters } = useCardFormState();
  const { isFormValid, canShowSteps } = useCardFormValidation(formState);
  const { handleSubmit, serverError } = useCardSubmit(
    formState,
    isFormValid,
  );

  return (
    <>
      <CardPreview
        cardNumber={formState.cardNumber}
        expirationDate={formState.expirationDate}
        cardCompany={formState.cardCompany}
      />
      <FormLayout onSubmit={handleSubmit}>
        {canShowSteps.canShowPassword && (
          <PasswordSection
            value={formState.password}
            setValue={setters.setPassword}
          />
        )}
        {canShowSteps.canShowCvc && (
          <CvcSection
            value={formState.cvc}
            setValue={setters.setCvc}
            serverError={
              serverError?.code === 'INVALID_CVC' ? serverError.message : ''
            }
          />
        )}
        {canShowSteps.canShowExpirationDate && (
          <ExpirationDateSection
            value={formState.expirationDate}
            setValue={setters.setExpirationDate}
            serverError={
              serverError?.code === 'INVALID_EXPIRATION_DATE'
                ? serverError.message
                : ''
            }
          />
        )}
        {canShowSteps.canShowCompany && (
          <CardCompanySection
            value={formState.cardCompany}
            setValue={setters.setCardCompany}
          />
        )}
        <CardNumberSection
          value={formState.cardNumber}
          setValue={setters.setCardNumber}
          serverError={
            serverError?.code === 'INVALID_CARD_NUMBER'
              ? serverError.message
              : ''
          }
        />

        {isFormValid && (
          <SubmitButton type="submit">
            확인
          </SubmitButton>
        )}
      </FormLayout>
    </>
  );
};

export default CardAddPage;
