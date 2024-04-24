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
import { ChangeEvent, useRef, useState, KeyboardEvent, FormEvent } from "react";
import { ERRORS } from "@/constants/messages";

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
  const [CVC, setCVC] = useState({
    value: "",
    isError: false,
    errorMessage: "",
    isDone: false,
  });
  const [CVCShowNextInput, setCVCShowNextInput] = useState<boolean>(false);
  const [password, setPassword] = useState({
    value: "",
    isDone: false,
  });

  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword({
      ...password,
      value,
      isDone: value.length === 2,
    });
  };

  const changeCardCompany = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setCardCompany(value);
    cardCompanyRef.current?.blur();
  };

  const CVCHandleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (CVC.value.length === 3) {
        setCVCShowNextInput(true);
      } else {
        setCVC({ ...CVC, isError: true, errorMessage: "세 자리 숫자를 입력해주세요" });
      }
    }
  };

  const changeCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (Number.isInteger(Number(value))) {
      setCVC({
        ...CVC,
        value,
        isError: false,
        errorMessage: "",
        isDone: value.length === 3,
      });
      return;
    }
    setCVC({
      ...CVC,
      isError: true,
      errorMessage: ERRORS.isNotInteger,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.app}>
      <CardPreview
        cardNumbers={{
          first: cardNumbers.data.first.isDone ? cardNumbers.data.first.value : "",
          second: cardNumbers.data.second.isDone ? cardNumbers.data.second.value : "",
          third: cardNumbers.data.third.isDone ? cardNumbers.data.third.value : "",
          fourth: cardNumbers.data.fourth.isDone ? cardNumbers.data.fourth.value : "",
        }}
        expirationDate={{
          month: expirationDate.data.month.isDone ? expirationDate.data.month.value : "",
          year: expirationDate.data.year.isDone ? expirationDate.data.year.value : "",
        }}
        ownerName={{
          ownerName: ownerName.data.ownerName.isDone ? ownerName.data.ownerName.value : "",
        }}
      />
      <form onSubmit={handleSubmit}>
        {CVCShowNextInput && <PasswordInput password={password} onChange={changePassword} />}
        {<CVCInput CVC={CVC} changeCVC={changeCVC} onKeyDown={CVCHandleKeyDown} />}
        {/* {ownerNameNextInput && <CVCInput CVC={CVC} changeCVC={changeCVC} />}
        {
          <OwnerNameInput
            ownerName={ownerName}
            changeOwnerName={changeOwnerName}
            refs={ownerNameRefs}
            onKeyDown={ownerNameHandleKeyDown}
          />
        } */}
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
        {CVCShowNextInput && <SubmitButton />}
      </form>
    </div>
  );
};

export default App;
