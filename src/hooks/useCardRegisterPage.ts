import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCardBrand } from "../utils/getCardBrand";
import { getCardNumberErrorMessage } from "../utils/getCardNumberErrorMessage";
import { getExpNumberErrorMessage } from "../utils/getExpNumberErrorMessage";
import { getCvcNumberErrorMessage } from "../utils/getCvcNumberErrorMessage";
import { getPasswordErrorMessage } from "../utils/getPasswordErrorMessage";

import type { CardNumbers } from "../components/InputField/CardNumberField";
import type { ExpNumber } from "../components/InputField/ExpNumberField";

export default function useCardRegisterPage() {
  const [cardNumbers, setCardNumbers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const [expNumbers, setExpNumbers] = useState({ mm: "", yy: "" });
  const [cvcNumbers, setCvcNumbers] = useState("");
  const [cardFirm, setCardFirm] = useState({ value: "", label: "" });
  const [passwordNumbers, setPasswordNumbers] = useState("");

  const cardBrand = getCardBrand(cardNumbers);

  const [isCardNumberCompleted, setIsCardNumberCompleted] = useState(false);
  const [isExpNumberCompleted, setIsExpNumberCompleted] = useState(false);
  const [isCvcNumberCompleted, setIsCvcNumberCompleted] = useState(false);

  const isAllValid =
    cardFirm.value !== "" &&
    getCardNumberErrorMessage(cardNumbers, cardBrand) === null &&
    getExpNumberErrorMessage(expNumbers) === null &&
    getCvcNumberErrorMessage(cvcNumbers) === null &&
    getPasswordErrorMessage(passwordNumbers) === null;

  const navigate = useNavigate();

  // 각 인풋 상태값 업데이트
  const onCardNumberChange = (value: CardNumbers) => setCardNumbers(value);
  const onCardFirmChange = (value: string, label: string) =>
    setCardFirm({ value, label });
  const onExpNumberChange = (value: ExpNumber) => setExpNumbers(value);
  const onCvcNumberChange = (value: string) => setCvcNumbers(value);
  const onPasswordNumberChange = (value: string) => setPasswordNumbers(value);

  // 각 컴포넌트 완료 상태
  const onCardNumberComplete = (isCompleted: boolean) => {
    if (isCompleted) setIsCardNumberCompleted(true);
  };
  const onExpNumberComplete = (isCompleted: boolean) => {
    if (isCompleted) setIsExpNumberCompleted(true);
  };
  const onCvcNumberComplete = (isCompleted: boolean) => {
    if (isCompleted) setIsCvcNumberCompleted(true);
  };

  //완료 페이지 이동
  const handleComplete = () => {
    navigate("/complete", {
      state: { first: cardNumbers.first, cardFirmLabel: cardFirm.label },
    });
  };

  return {
    cardNumbers,
    expNumbers,
    cvcNumbers,
    cardFirm,
    passwordNumbers,
    cardBrand,
    isCardNumberCompleted,
    isExpNumberCompleted,
    isCvcNumberCompleted,
    isAllValid,
    onCardNumberChange,
    onExpNumberChange,
    onCvcNumberChange,
    onCardFirmChange,
    onPasswordNumberChange,
    onCardNumberComplete,
    onExpNumberComplete,
    onCvcNumberComplete,
    handleComplete,
  };
}
