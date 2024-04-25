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

const App = () => {
  const {
    cardNumbers,
    changeCardNumbers,
    blurCardNumbers,
    cardNumbersRefs,
    cardNumbersNextInput,
  } = useCardNumbers();
  const {
    expirationDate,
    changeExpirationDate,
    blurExpirationDate,
    refs: expirationDateRefs,
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
      firstCardNumber: cardNumbers.data.first.value,
    };
    navigate(`/react-payments/submit`, { state: { ...params } });
  };

  return (
    <div className={styles.app}>
      <CardPreview
        face={isFocus ? "back" : "front"}
        CVC={CVC.value}
        cardCompany={cardCompany}
        cardNumbers={{
          first: cardNumbers.data.first.isDone
            ? cardNumbers.data.first.value
            : "",
          second: cardNumbers.data.second.isDone
            ? cardNumbers.data.second.value
            : "",
          third: cardNumbers.data.third.isDone
            ? cardNumbers.data.third.value
            : "",
          fourth: cardNumbers.data.fourth.isDone
            ? cardNumbers.data.fourth.value
            : "",
        }}
        expirationDate={{
          month: expirationDate.data.month.isDone
            ? expirationDate.data.month.value
            : "",
          year: expirationDate.data.year.isDone
            ? expirationDate.data.year.value
            : "",
        }}
        ownerName={{
          ownerName: ownerName.isDone ? ownerName.value : "",
        }}
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
        {cardCompany && (
          <ExpirationDateInput
            expirationDate={expirationDate}
            changeExpirationDate={changeExpirationDate}
            blurExpirationDate={blurExpirationDate}
            refs={expirationDateRefs}
          />
        )}
        {cardNumbersNextInput && (
          <CardCompany
            cardCompany={cardCompany}
            cardCompanyRef={cardCompanyRef}
            changeCardCompany={changeCardCompany}
          />
        )}
        <CardNumberInput
          cardNumbers={cardNumbers}
          changeCardNumbers={changeCardNumbers}
          blurCardNumbers={blurCardNumbers}
          refs={cardNumbersRefs}
        />
        {isAllDone(cardNumbers.data) &&
          cardCompany &&
          isAllDone(expirationDate.data) &&
          ownerName.isDone &&
          CVC.isDone &&
          password.isDone && <SubmitButton />}
      </form>
    </div>
  );
};

export default App;
