import CardCVCInput from './cardInput/CVCInput';
import CardExpiryDateInput from './cardInput/ExpiryDateInput';
import CardNumberInput from './cardInput/NumberInput';
import styles from './cardInputForm.module.css';
import CardIssuerSelector from './cardInput/IssuerSelector';
import CardSubmitButton from './CardSubmitButton';
import { ROUTER } from '../../../global/constants';
import { useNavigate } from 'react-router-dom';
import useValidateForm from '../../../hooks/useValidateForm';
import CardPasswordInput from './cardInput/PasswordInput';
import { useState } from 'react';
import useRender from '../../../hooks/useRender';

function CardInputForm() {
  const {
    isCardNumberValid,
    setIsCardNumberValid,
    isIssuerValid,
    setIsIssuerValid,
    isExpiryDateValid,
    setIsExpiryDateValid,
    isCVCValid,
    setIsCVCValid,
    isPasswordValid,
    setIsPasswordValid,
    isDataValid,
    ref,
  } = useValidateForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  function submitCardInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate(ROUTER.registerComplete);
  }

  function changeValidation() {
    const target = ref.current;

    if (target) {
      setIsFormValid(target.checkValidity());
    }
  }

  const inputs = [
    {
      Component: CardNumberInput,
      props: {
        isValid: isCardNumberValid,
        setIsValid: setIsCardNumberValid,
      },
    },
    {
      Component: CardIssuerSelector,
      props: { isValid: isIssuerValid, setIsValid: setIsIssuerValid },
    },
    {
      Component: CardExpiryDateInput,
      props: {
        isValid: isExpiryDateValid,
        setIsValid: setIsExpiryDateValid,
      },
    },
    {
      Component: CardCVCInput,
      props: {
        isValid: isCVCValid,
        setIsValid: setIsCVCValid,
      },
    },
    {
      Component: CardPasswordInput,
      props: {
        isValid: isPasswordValid,
        setIsValid: setIsPasswordValid,
      },
    },
  ];

  // @type-s-ignore
  // @ts-ignore
  const renderList = useRender(inputs, ref);

  return (
    <form
      className={styles.cardInputForm}
      onSubmit={submitCardInfo}
      onInput={changeValidation}
      ref={ref}
    >
      {renderList.map(({ Component, props }, index) => {
        return <Component key={index} {...props} />;
      })}

      {isDataValid && isFormValid && <CardSubmitButton />}
    </form>
  );
}
export default CardInputForm;
