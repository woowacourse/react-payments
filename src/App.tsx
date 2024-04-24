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
import { ChangeEvent, useRef, useState } from "react";

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
  const [cardCompany, setCardCompany] = useState("");
  const cardCompanyRef = useRef<HTMLSelectElement>(null);

  const changeCardCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCardCompany(value);
    cardCompanyRef.current?.blur();
  };

  return (
    <div className={styles.app}>
      <CardPreview
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
      <form>
        {/* <PasswordInput /> */}
        {ownerNameNextInput && <CVCInput />}
        {
          <OwnerNameInput
            ownerName={ownerName}
            changeOwnerName={changeOwnerName}
            refs={ownerNameRefs}
            onKeyDown={ownerNameHandleKeyDown}
          />
        }
        {/* {
          <ExpirationDateInput
            expirationDate={expirationDate}
            changeExpirationDate={changeExpirationDate}
            blurExpirationDate={blurExpirationDate}
            refs={expirationDateRefs}
          />
        } */}
        {/* {cardNumbersNextInput && (
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
          refs={CardNumbersRefs}
        /> */}
      </form>
    </div>
  );
};

export default App;
