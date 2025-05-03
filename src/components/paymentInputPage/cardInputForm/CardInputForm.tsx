import CardCVCInput, { CardCVCInputProps } from './cardInput/CVCInput';
import CardExpiryDateInput, {
  CardExpiryDateInputProps,
} from './cardInput/ExpiryDateInput';
import CardNumberInput, { CardNumberInputProps } from './cardInput/NumberInput';
import styles from './cardInputForm.module.css';
import CardIssuerSelector, {
  CardIssuerSelectorProps,
} from './cardInput/IssuerSelector';
import CardSubmitButton from './CardSubmitButton';
import { ROUTER } from '../../../global/constants';
import { useNavigate } from 'react-router-dom';
import useValidateForm from '../../../hooks/useValidateForm';
import CardPasswordInput, {
  CardPasswordInputProps,
} from './cardInput/PasswordInput';
import { useState } from 'react';
import useRender, { RenderItem } from '../../../hooks/useRender';
import { validate } from '../../../utils/validate';

type CardInputProps =
  | CardNumberInputProps
  | CardIssuerSelectorProps
  | CardExpiryDateInputProps
  | CardCVCInputProps
  | CardPasswordInputProps;

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
      isInputValid: validate.combineValidity(isCardNumberValid),
    },
    {
      Component: CardIssuerSelector,
      props: { isValid: isIssuerValid, setIsValid: setIsIssuerValid },
      isInputValid: validate.combineValidity(isIssuerValid),
    },
    {
      Component: CardExpiryDateInput,
      props: {
        isValid: isExpiryDateValid,
        setIsValid: setIsExpiryDateValid,
      },
      isInputValid: validate.combineValidity(isExpiryDateValid),
    },
    {
      Component: CardCVCInput,
      props: {
        isValid: isCVCValid,
        setIsValid: setIsCVCValid,
      },
      isInputValid: validate.combineValidity(isCVCValid),
    },
    {
      Component: CardPasswordInput,
      props: {
        isValid: isPasswordValid,
        setIsValid: setIsPasswordValid,
      },
      isInputValid: validate.combineValidity(isPasswordValid),
    },
  ];

  const order = useRender<CardInputProps>(
    inputs as RenderItem<CardInputProps>[],
    ref
  );

  const renderList = inputs.slice(0, order + 1) as RenderItem<CardInputProps>[];

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
