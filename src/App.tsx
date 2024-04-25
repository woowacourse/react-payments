import "./index.css";
import styles from "./App.module.css";
import CardNumberInput from "@/components/CardNumberInput/CardNumberInput";
import ExpirationDateInput from "@/components/ExpirationDateInput/ExpirationDateInput";
import OwnerNameInput from "@/components/OwnerNameInput.tsx/OwnerNameInput";
import CardPreview from "@/components/CardPreview/CardPreview";
import useCardNumbers from "@/hooks/useCardNumbers";
import useExpirationDate from "@/hooks/useExpirationDate";
import useOwnerName from "@/hooks/useOwnerName";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import CVCInput from "@/components/CVCInput/CVCInput";
import CardCompany from "@/components/CardCompany/CardCompany";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import { FormEvent } from "react";
import { isAllDone } from "./utils/input";
import useCVC from "./hooks/useCVC";
import useCardCompany from "./hooks/useCardCompany";
import usePassword from "./hooks/usePassword";

const App = () => {
  const {
    cardNumbers,
    changeCardNumbers,
    blurCardNumbers,
    refs: cardNumbersRefs,
    nextInput: cardNumbersNextInput,
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
    refs: ownerNameRefs,
    nextInput: ownerNameNextInput,
    handleKeyDown: ownerNameHandleKeyDown,
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(cardCompany, cardNumbers.data.first.value);
  };

  return (
    <div className={styles.app}>
      <CardPreview
        face={isFocus ? "front" : "back"}
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
          ownerName: ownerName.data.ownerName.isDone
            ? ownerName.data.ownerName.value
            : "",
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
            refs={ownerNameRefs}
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
        {
          <CardCompany
            cardCompany={cardCompany}
            cardCompanyRef={cardCompanyRef}
            changeCardCompany={changeCardCompany}
          />
        }
        <CardNumberInput
          cardNumbers={cardNumbers}
          changeCardNumbers={changeCardNumbers}
          blurCardNumbers={blurCardNumbers}
          refs={cardNumbersRefs}
        />
        {isAllDone(cardNumbers.data) &&
          cardCompany &&
          isAllDone(expirationDate.data) &&
          isAllDone(ownerName.data) &&
          CVC.isDone &&
          password.isDone && <SubmitButton />}
      </form>
    </div>
  );
};

export default App;
