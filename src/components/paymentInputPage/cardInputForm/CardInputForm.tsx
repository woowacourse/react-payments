import CVCInput, { CVCInputProps } from './cardInput/CVCInput';
import ExpiryDateInput, {
  ExpiryDateInputProps,
} from './cardInput/ExpiryDateInput';
import NumberInput, { NumberInputProps } from './cardInput/NumberInput';
import styles from './cardInputForm.module.css';
import IssuerSelector, {
  IssuerSelectorProps,
} from './cardInput/IssuerSelector';
import CardSubmitButton from './CardSubmitButton';
import { ROUTER } from '../../../global/constants';
import { useNavigate } from 'react-router-dom';
import useValidateForm from '../../../hooks/useValidateForm';
import PasswordInput, { PasswordInputProps } from './cardInput/PasswordInput';
import { useState } from 'react';
import useRender, { RenderItem } from '../../../hooks/useRender';
import { validate } from '../../../utils/validate';

type CardInputProps =
  | NumberInputProps
  | IssuerSelectorProps
  | ExpiryDateInputProps
  | CVCInputProps
  | PasswordInputProps;

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
      Component: NumberInput,
      props: {
        isCardNumberValid,
        setIsCardNumberValid,
      },
      isInputValid: validate.combineValidity(isCardNumberValid),
    },
    {
      Component: IssuerSelector,
      props: { isIssuerValid, setIsIssuerValid },
      isInputValid: validate.combineValidity(isIssuerValid),
    },
    {
      Component: ExpiryDateInput,
      props: {
        isExpiryDateValid,
        setIsExpiryDateValid,
      },
      isInputValid: validate.combineValidity(isExpiryDateValid),
    },
    {
      Component: CVCInput,
      props: {
        isCVCValid,
        setIsCVCValid,
      },
      isInputValid: validate.combineValidity(isCVCValid),
    },
    {
      Component: PasswordInput,
      props: {
        isPasswordValid,
        setIsPasswordValid,
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
