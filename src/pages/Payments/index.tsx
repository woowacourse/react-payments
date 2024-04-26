import styled from "@emotion/styled";
import CreditCardFront from "../../components/creditCard/front";
import CreditCardForm from "../../components/creditCardForm";
import useInput from "../../hooks/useInput";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import {
  AuthenticationValue,
  CardNumberValue,
  ExpirationPeriodValue,
  InfoValue,
  OwnerValue,
} from "../../@types/CreditCard";
import SIGN from "../../constants/sign";
import InputCreditCardNumber from "../../components/input/InputCreditCardNumber";
import InputExpirationPeriod from "../../components/input/InputExpirationPeriod";
import InputOwnerName from "../../components/input/InputOwnerName";
import SelectBox from "../../components/select/common/SelectBox";
import CARDTYPE, { CardType } from "../../constants/cardType";
import useSelect from "../../hooks/useSelect";
import InputCVC from "../../components/input/InputCVC";
import InputPassword from "../../components/input/InputPassword";
import useCurrentIndex from "../../hooks/useCurrentIndex";
import { useState } from "react";
import CreditCardBack from "../../components/creditCard/back";

interface CreditCardForms {
  title: string;
  description: string;
  inputError: boolean;
  childComponent: JSX.Element;
}

const Payments = () => {
  const [cardNumber, setCardNumber, cardNumberError, cardNumberIsComplete] =
    useInput<CardNumberValue>({
      firstValue: SIGN.empty,
      secondValue: SIGN.empty,
      thirdValue: SIGN.empty,
      fourthValue: SIGN.empty,
    });

  const { isDropdown, handleDropdown, selected, handleSelected } = useSelect<CardType>();

  const [expirationPeriod, setExpirationPeriod, expirationPeriodError, expirationPeriodIsComplete] =
    useInput<ExpirationPeriodValue>({
      month: SIGN.empty,
      year: SIGN.empty,
    });

  const [owner, setOwner, ownerError, ownerIsComplete] = useInput<OwnerValue>({ name: SIGN.empty });
  const [info, setInfo, infoError, infoIsComplete] = useInput<InfoValue>({ cvc: SIGN.empty });
  const [authentication, setAuthentication, authenticationError, authenticationComplete] =
    useInput<AuthenticationValue>({
      password: SIGN.empty,
    });

  const [isCvcFocus, setIsCvcFocus] = useState(false);

  const currentIndex = useCurrentIndex(
    cardNumberIsComplete,
    !!selected,
    expirationPeriodIsComplete,
    ownerIsComplete,
    infoIsComplete,
    authenticationComplete
  );

  const formatExpirationPeriod = () =>
    expirationPeriod.year.length
      ? expirationPeriod.month + SIGN.slash + expirationPeriod.year
      : expirationPeriod.month;

  const creditCardForms: CreditCardForms[] = [
    {
      title: CARD_FORM_MESSAGE.inputCardNumber,
      description: CARD_FORM_MESSAGE.cardNumberDescription,
      inputError: cardNumberError,
      childComponent: (
        <InputCreditCardNumber
          inputValue={cardNumber}
          handleChange={setCardNumber}
          inputError={cardNumberError}
        />
      ),
    },
    {
      title: CARD_FORM_MESSAGE.inputCardType,
      description: CARD_FORM_MESSAGE.domasticCardOnly,
      inputError: false,
      childComponent: (
        <SelectBox
          isDropdown={isDropdown}
          handleDropdown={handleDropdown}
          selected={selected}
          handleSelected={handleSelected}
          optionsContents={CARDTYPE}
          placeholder={CARD_FORM_MESSAGE.inputCardTypePlaceholder}
        />
      ),
    },
    {
      title: CARD_FORM_MESSAGE.inputCardExpirationDate,
      description: CARD_FORM_MESSAGE.cardExpirationDateDescription,
      inputError: expirationPeriodError,
      childComponent: (
        <InputExpirationPeriod
          inputValue={expirationPeriod}
          handleChange={setExpirationPeriod}
          inputError={expirationPeriodError}
        />
      ),
    },
    {
      title: CARD_FORM_MESSAGE.inputCardOwner,
      description: "",
      inputError: ownerError,
      childComponent: (
        <InputOwnerName inputValue={owner.name} handleChange={setOwner} inputError={ownerError} />
      ),
    },
    {
      title: CARD_FORM_MESSAGE.inputCvc,
      description: "",
      inputError: infoError,
      childComponent: (
        <InputCVC
          inputValue={info.cvc}
          handleChange={setInfo}
          inputError={infoError}
          onFocus={() => setIsCvcFocus(true)}
          onBlur={() => setIsCvcFocus(false)}
        />
      ),
    },
    {
      title: CARD_FORM_MESSAGE.inputCardPassword,
      description: CARD_FORM_MESSAGE.cardPasswordDescription,
      inputError: authenticationError,
      childComponent: (
        <InputPassword
          inputValue={authentication.password}
          handleChange={setAuthentication}
          inputError={authenticationError}
        />
      ),
    },
  ];

  return (
    <PaymentsContainer>
      {!isCvcFocus ? (
        <CreditCardFront
          creditCardNumber={[
            cardNumber.firstValue,
            cardNumber.secondValue,
            cardNumber.thirdValue,
            cardNumber.fourthValue,
          ]}
          expirationPeriod={formatExpirationPeriod()}
          ownerName={owner.name}
          selectedCard={selected}
        />
      ) : (
        <CreditCardBack cvcNumber={info.cvc} />
      )}

      <InputFormContainer>
        {creditCardForms.map((formData, idx) => {
          if (idx > currentIndex) return;

          return (
            <CreditCardForm
              title={formData.title}
              description={formData.description}
              inputError={formData.inputError}
              key={formData.title}
            >
              {formData.childComponent}
            </CreditCardForm>
          );
        })}
      </InputFormContainer>
    </PaymentsContainer>
  );
};

export default Payments;

const PaymentsContainer = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 45px;
  display: flex;
  gap: 16px;
`;
