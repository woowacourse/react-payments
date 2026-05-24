import useFormStep from '../../hooks/useFormStep';
import { FORM_STEP } from '../../constants/formStep';
import type { CardFormTypes } from '../../types/card';
import CardIssuerSection from './CardIssuerSection/CardIssuerSection';
import CardNumberSection from './CardNumberSection/CardNumberSection';
import CardPasswordSection from './CardPasswordSection/CardPasswordSection';
import CvcSection from './CardCvcSection/CardCvcSection';
import ExpirationDateSection from './CardExpirationDateSection/CardExpirationDateSection';
import SubmitButtonSection from './SubmitButtonSection/SubmitButtonSection';
import { StyledForm } from './CardForm.styles';
import {
  getCardCvcError,
  getCardIssuerError,
  getCardMonthError,
  getCardNumberError,
  getCardPasswordError,
  getCardYearError,
} from '../../utils/validation';
import type {
  CardServerErrorField,
  CardServerErrors,
} from '../../constants/serverError';

interface Props {
  cardForm: CardFormTypes;
  updateCardForm: <K extends keyof CardFormTypes>(
    key: K,
    value: CardFormTypes[K],
  ) => void;
  handleOnSubmit: (e: React.SubmitEvent) => void;
  serverErrors: CardServerErrors;
  clearServerError: (field: CardServerErrorField) => void;
}

function CardForm({
  cardForm,
  updateCardForm,
  handleOnSubmit,
  serverErrors,
  clearServerError,
}: Props) {
  const { step, openStep } = useFormStep();

  function updateField<K extends keyof CardFormTypes>(
    field: K,
    value: CardFormTypes[K],
    serverErrorField?: CardServerErrorField,
  ) {
    if (serverErrorField) {
      clearServerError(serverErrorField);
    }

    updateCardForm(field, value);
  }

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      {step >= FORM_STEP.PASSWORD && (
        <CardPasswordSection
          value={cardForm.cardPassword}
          updateValue={(value) => {
            updateField('cardPassword', value);

            if (!getCardPasswordError(value).error) {
              openStep(FORM_STEP.SUBMIT);
            }
          }}
        />
      )}
      {step >= FORM_STEP.CVC && (
        <CvcSection
          value={cardForm.cardCvc}
          serverErrorMessage={serverErrors.cardCvc}
          updateValue={(value) => {
            updateField('cardCvc', value, 'cardCvc');

            if (!getCardCvcError(value).error) {
              openStep(FORM_STEP.PASSWORD);
            }
          }}
        />
      )}
      {step >= FORM_STEP.EXPIRATION_DATE && (
        <ExpirationDateSection
          value={cardForm.cardExpirationDate}
          serverErrorMessage={serverErrors.cardExpirationDate}
          updateValue={(value) => {
            updateField('cardExpirationDate', value, 'cardExpirationDate');

            if (
              !getCardMonthError(value.month).error &&
              !getCardYearError(value.year).error
            ) {
              openStep(FORM_STEP.CVC);
            }
          }}
        />
      )}
      {step >= FORM_STEP.CARD_ISSUER && (
        <CardIssuerSection
          value={cardForm.cardIssuer}
          updateValue={(value) => {
            updateField('cardIssuer', value);

            if (!getCardIssuerError(value).error) {
              openStep(FORM_STEP.EXPIRATION_DATE);
            }
          }}
        />
      )}
      {step >= FORM_STEP.CARD_NUMBER && (
        <CardNumberSection
          value={cardForm.cardNumber}
          serverErrorMessage={serverErrors.cardNumber}
          updateValue={(value) => {
            updateField('cardNumber', value, 'cardNumber');

            if (!getCardNumberError(value).error) {
              openStep(FORM_STEP.CARD_ISSUER);
            }
          }}
        />
      )}
      {step >= FORM_STEP.SUBMIT && <SubmitButtonSection cardForm={cardForm} />}
    </StyledForm>
  );
}

export default CardForm;
