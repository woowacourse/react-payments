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
import { INITIAL_CARD, ROUTER } from '../../../global/constants';
import { useNavigate } from 'react-router-dom';
import useValidateForm from '../../../hooks/useValidateForm';
import PasswordInput, { PasswordInputProps } from './cardInput/PasswordInput';
import { useState } from 'react';
import useRender, { RenderItem } from '../../../hooks/useRender';
import { validate } from '../../../utils/validate';
import useCardContext from '../../../hooks/useCardContext';

type CardInputProps =
  | NumberInputProps
  | IssuerSelectorProps
  | ExpiryDateInputProps
  | CVCInputProps
  | PasswordInputProps;

function CardInputForm() {
  const {
    setCardNumbers,
    setCardIssuer,
    setExpiryDate,
    setCardCVC,
    setPassword,
  } = useCardContext();
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
    ref,
  } = useValidateForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const { cardNumbers, cardIssuer } = useCardContext();
  const navigate = useNavigate();
  function submitCardInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate(ROUTER.registerComplete, {
      state: {
        cardNumbers: cardNumbers,
        cardIssuer: cardIssuer,
      },
    });

    initForm();
  }

  function changeValidation() {
    const target = ref.current;

    if (target) {
      setIsFormValid(target.checkValidity());
    }
  }

  function initForm() {
    setCardNumbers(INITIAL_CARD.cardNumbers);
    setCardIssuer(INITIAL_CARD.cardIssuer);
    setExpiryDate(INITIAL_CARD.expiryDate);
    setCardCVC(INITIAL_CARD.cardCVC);
    setPassword(INITIAL_CARD.password);
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

  const renderList = inputs
    .slice(0, order + 1)
    .reverse() as RenderItem<CardInputProps>[];
  const isCardValid =
    isCardNumberValid &&
    isIssuerValid &&
    isExpiryDateValid &&
    isCVCValid &&
    isPasswordValid;

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

      {isCardValid && isFormValid && <CardSubmitButton />}
    </form>
  );
}

export default CardInputForm;
