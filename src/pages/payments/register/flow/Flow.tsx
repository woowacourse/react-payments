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

    refs: cardNubmersRefs,
    ref: cardNubmersRef,

    errors: errorsCardNumbers,
    valids: cardNumbersValids,
    isValid: cardNubmersIsValid,

    renderErrorMessage: renderErrorMessageCardNumbers,
    renderErrorInput: renderErrorCardNumberInput,
  } = useCardNumbers();

  const {
    value: card,
    onChange: handleChangeCard,

    onBlur: handleBlurCard,

    refs: cardRefs,
    ref: cardRef,

    errors: errorsCard,
    valids: cardValids,
    isValid: cardIsValid,

    renderErrorMessage: renderErrorMessageCard,
  } = useCard();

  const {
    value: expirationDate,
    onChange: handleChangeExpirationDate,

    blurValue: onBlurExpirationDate,
    onBlur: handleBlurExpirationDate,

    refs: expirationDateRefs,
    ref: expirationDateRef,

    errors: errorsExpirationDate,
    valids: expirationDateValids,
    isValid: expirationDateIsValid,

    invalidAttemp: expirationDateInvalidAttemp,
    renderErrorMessage: renderErrorMessageExpirationDate,
  } = useExpirationDate();

  //cvc
  const {
    value: cvc,
    onChange: handleChangeCvc,

    blurValue: onBlurCvc,
    onBlur: handleBlurCvc,

    refs: cvcRefs,
    ref: cvcRef,

    errors: errorsCvc,
    valids: cvcValids,
    isValid: cvcIsValid,

    invalidAttemp: cvcInvalidAttemp,
    renderErrorMessage: renderErrorMessageCvc,
  } = useCvc();

  //password
  const {
    value: password,
    onChange: handleChangePassword,

    blurValue: onBlurPassword,
    onBlur: handleBlurPassword,

    refs: passwordRefs,
    ref: passwordRef,

    errors: errorsPassword,
    valids: passwordValids,
    isValid: passwordIsValid,

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
        cardNumbersValids,
        cardNubmersIsValid,

        cardNubmersRefs,
        cardNubmersRef,

        renderErrorMessageCardNumbers,
        renderErrorCardNumberInput,

        // card
        card,
        handleChangeCard,

        handleBlurCard,

        cardRefs,
        cardRef,

        errorsCard,
        cardValids,
        cardIsValid,

        renderErrorMessageCard,

        // expirationDate
        expirationDate,
        handleChangeExpirationDate,

        onBlurExpirationDate,
        handleBlurExpirationDate,

        errorsExpirationDate,
        expirationDateValids,
        expirationDateIsValid,

        expirationDateRefs,
        expirationDateRef,

        expirationDateInvalidAttemp,
        renderErrorMessageExpirationDate,

        // cvc
        cvc,
        handleChangeCvc,

        onBlurCvc,
        handleBlurCvc,

        cvcRefs,
        cvcRef,

        errorsCvc,
        cvcValids,
        cvcIsValid,

        cvcInvalidAttemp,
        renderErrorMessageCvc,

        // password
        password,
        handleChangePassword,

        onBlurPassword,
        handleBlurPassword,

        passwordRefs,
        passwordRef,

        errorsPassword,
        passwordValids,
        passwordIsValid,

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
