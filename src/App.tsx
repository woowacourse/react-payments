import "./index.css";
import styles from "./App.module.css";
import { FormEvent } from "react";
import { isAllDone } from "./utils/input";
import { useNavigate } from "react-router-dom";
import {
  useCardNumbers,
  useCardCompany,
  useCVC,
  useExpirationDate,
  useOwnerName,
  usePassword,
} from "@/hooks";
import {
  CardCompany,
  CardNumberInput,
  CardPreview,
  CVCInput,
  ExpirationDateInput,
  OwnerNameInput,
  PasswordInput,
  SubmitButton,
} from "@/components";
import { getPreviewData } from "@/utils/card";

const App = () => {
  const {
    cardNumbers,
    changeCardNumbers,
    blurCardNumbers,
    cardNumbersRefs,
    cardNumbersNextInput,
    errorMessage: cardNumbersErrorMessage,
  } = useCardNumbers();
  const {
    expirationDate,
    changeExpirationDate,
    refs: expirationDateRefs,
    errorMessage: expirationDateErrorMessage,
    nextInput: expirationDateNextInput,
  } = useExpirationDate();
  const {
    ownerName,
    changeOwnerName,
    ownerNameRef,
    ownerNameNextInput,
    ownerNameHandleKeyDown,
  } = useOwnerName();
  const {
    CVC,
    CVCShowNextInput,
    CVCHandleKeyDown,
    changeCVC,
    isFocus,
    focusCVC,
    blurCVC,
  } = useCVC();
  const { cardCompany, cardCompanyRef, changeCardCompany } = useCardCompany();
  const { password, changePassword } = usePassword();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = {
      cardCompany,
      firstCardNumber: cardNumbers.first.value,
    };
    navigate(`/react-payments/submit`, { state: { ...params } });
  };

  return (
    <div className={styles.app}>
      <CardPreview
        face={isFocus ? "back" : "front"}
        CVC={CVC.value}
        cardCompany={cardCompany}
        cardNumbers={getPreviewData(cardNumbers)}
        expirationDate={getPreviewData(expirationDate)}
        ownerName={ownerName.isDone ? ownerName.value : ""}
      />
      <form onSubmit={handleSubmit}>
        {CVCShowNextInput && (
          <PasswordInput password={password} onChange={changePassword} />
        )}
        {ownerNameNextInput && (
          <CVCInput
            CVC={CVC}
            onChange={changeCVC}
            onKeyDown={CVCHandleKeyDown}
            onFocus={focusCVC}
            onBlur={blurCVC}
          />
        )}
        {expirationDateNextInput && (
          <OwnerNameInput
            ownerName={ownerName}
            changeOwnerName={changeOwnerName}
            ownerNameRef={ownerNameRef}
            onKeyDown={ownerNameHandleKeyDown}
          />
        )}
        {
          <ExpirationDateInput
            errorMessage={expirationDateErrorMessage}
            expirationDate={expirationDate}
            changeExpirationDate={changeExpirationDate}
            refs={expirationDateRefs}
          />
        }
        {cardNumbersNextInput && (
          <CardCompany
            cardCompany={cardCompany}
            cardCompanyRef={cardCompanyRef}
            changeCardCompany={changeCardCompany}
          />
        )}
        <CardNumberInput
          cardNumbers={cardNumbers}
          errorMessage={cardNumbersErrorMessage}
          changeCardNumbers={changeCardNumbers}
          blurCardNumbers={blurCardNumbers}
          refs={cardNumbersRefs}
        />
        {isAllDone(cardNumbers) &&
          cardCompany &&
          isAllDone(expirationDate) &&
          ownerName.isDone &&
          CVC.isDone &&
          password.isDone && <SubmitButton />}
      </form>
    </div>
  );
};

export default App;
