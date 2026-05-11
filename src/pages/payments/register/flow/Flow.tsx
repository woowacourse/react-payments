import { Outlet, useNavigate } from 'react-router';

import { useCardNumbers } from '../form/hooks/useCardNumbers';
import { useCard } from '../form/hooks/useCard';
import { useExpirationDate } from '../form/hooks/useExpirationDate';
import { useCvc } from '../form/hooks/useCvc';
import { usePassword } from '../form/hooks/usePassword';

import { BRAND_NUMBER } from '../form/constant';

export const Flow = () => {
  const {
    value: cardNumbers,
    onChange: handleChangeCardNumbers,

    onBlur: handleBlurCardNumbers,

    errors: errorsCardNumbers,

    ref: cardNubmersRef,

    renderErrorMessage: renderErrorMessageCardNumbers,
    renderErrorInput: renderErrorCardNumberInput,
  } = useCardNumbers();

  const {
    value: card,
    onChange: handleChangeCard,

    onBlur: handleBlurCard,

    errors: errorsCard,

    renderErrorMessage: renderErrorMessageCard,
  } = useCard();

  const {
    value: expirationDate,
    onChange: handleChangeExpirationDate,

    blurValue: onBlurExpirationDate,
    onBlur: handleBlurExpirationDate,

    errors: errorsExpirationDate,

    invalidAttemp: expirationDateInvalidAttemp,
    renderErrorMessage: renderErrorMessageExpirationDate,
  } = useExpirationDate();

  //cvc
  const {
    value: cvc,
    onChange: handleChangeCvc,

    blurValue: onBlurCvc,
    onBlur: handleBlurCvc,

    errors: errorsCvc,

    invalidAttemp: cvcInvalidAttemp,
    renderErrorMessage: renderErrorMessageCvc,
  } = useCvc();

  //password
  const {
    value: password,
    onChange: handleChangePassword,

    blurValue: onBlurPassword,
    onBlur: handleBlurPassword,

    errors: errorsPassword,

    invalidAttemp: passwordInvalidAttemp,
    renderErrorMessage: renderErrorMessagePassword,
  } = usePassword();

  const renderBrandCard = (cardNumbers: string[]) => {
    if (cardNumbers[0].startsWith(BRAND_NUMBER.visa)) return 'visa';
    if (BRAND_NUMBER.mastercard.some((brandNumber) => cardNumbers[0].startsWith(brandNumber))) return 'mastercard';
    return 'default';
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/payments/register/complete');
  };

  return (
    <Outlet
      context={{
        // cardNumbers
        cardNumbers,
        handleChangeCardNumbers,

        handleBlurCardNumbers,

        errorsCardNumbers,

        cardNubmersRef,

        renderErrorMessageCardNumbers,
        renderErrorCardNumberInput,

        // card
        card,
        handleChangeCard,

        handleBlurCard,

        errorsCard,

        renderErrorMessageCard,

        // expirationDate
        expirationDate,
        handleChangeExpirationDate,

        onBlurExpirationDate,
        handleBlurExpirationDate,

        errorsExpirationDate,

        expirationDateInvalidAttemp,
        renderErrorMessageExpirationDate,

        // cvc
        cvc,
        handleChangeCvc,

        onBlurCvc,
        handleBlurCvc,

        errorsCvc,

        cvcInvalidAttemp,
        renderErrorMessageCvc,

        // password
        password,
        handleChangePassword,

        onBlurPassword,
        handleBlurPassword,

        errorsPassword,

        passwordInvalidAttemp,
        renderErrorMessagePassword,

        // creditCard
        renderBrandCard,

        // submit
        handleSubmit,
      }}
    />
  );
};
