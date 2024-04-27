import { useEffect } from "react";

const useFocus = (
  step: boolean[],
  {
    cardNumbers,
    cardCompany,
    cardExpirationMonth,
    cardExpirationYear,
    cardOwnerName,
    cardCVC,
    cardPassword,
  }: CardInformation
) => {
  /** 첫 카드 번호 입력칸 */
  useEffect(() => {
    if (
      step[0] &&
      !step[1] &&
      cardNumbers.every((cardNumber) => cardNumber.value === "")
    ) {
      cardNumbers[0].ref.current?.focus();
    }
  }, [step, cardNumbers]);

  /** 카드 번호 간 */

  useEffect(() => {
    cardNumbers.forEach((cardNumber, idx) => {
      if (cardNumber.value.length === 4 && idx < cardNumbers.length - 1) {
        cardNumbers[idx + 1].ref.current?.focus();
      }
    });
  }, [
    cardNumbers[0].value,
    cardNumbers[1].value,
    cardNumbers[2].value,
    cardNumbers[3].value,
  ]);

  /** 카드 번호 -> 카드 회사 선택 */
  useEffect(() => {
    if (cardNumbers[3].value.length === 4) {
      cardCompany.ref.current?.focus();
    }
  }, [cardCompany.value, cardExpirationMonth.ref, step[1]]);

  /** 카드 회사 선택 -> 카드 유효기간 */
  useEffect(() => {
    if (cardCompany.value !== "") {
      cardExpirationMonth.ref.current?.focus();
    }
  }, [cardCompany.value, cardExpirationMonth.ref, step[2]]);

  /** 유효기간 월 -> 유효기간 년도*/
  useEffect(() => {
    if (cardExpirationMonth.value.length === 2) {
      cardExpirationYear.ref.current?.focus();
    }
  }, [cardExpirationMonth.value]);

  /** 카드 유효기간 -> 카드 주인 이름 */
  useEffect(() => {
    if (cardExpirationYear.value.length === 2) {
      cardOwnerName.ref.current?.focus();
    }
  }, [cardExpirationYear.value, cardOwnerName.ref, step[3]]);

  /** 카드 cvc -> 비밀번호 */
  useEffect(() => {
    if (cardCVC.value.length === 3) {
      cardPassword.ref.current?.focus();
    }
  }, [cardCVC.value, cardPassword.ref, step[5]]);
};

export default useFocus;
