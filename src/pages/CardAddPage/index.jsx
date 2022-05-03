import { useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import useCardNumber from "../../hooks/useCardNumber";
import useCardPassword from "../../hooks/useCardPassword";
import useCardDueDate from "../../hooks/useCardDueDate";

import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import CardNumberInput from "../../components/CardNumberInput";
import CardDueDateInput from "../../components/CardDueDateInput";
import CardOwnerInput from "../../components/CardOwnerInput";
import CardCVCInput from "../../components/CardCVCInput";
import CardPasswordInput from "../../components/CardPasswordInput";

import { CARD_NUMBER, DUE_DATE, OWNER, CVC } from "../../constant";
import {
  PageWrapper,
  HeaderWrapper,
  CardWrapper,
  FooterWrapper,
} from "./style";

const isValidOwnerLength = (value) => value.length <= OWNER.MAX_LENGTH;
const isValidCvc = (value) => value.length <= CVC.UNIT_LENGTH && !isNaN(value);

function CardAddPage() {
  const { cardNumbers, handleChangeCardNumber, cardNumberInputRefs } =
    useCardNumber();
  const { dueDate, handleChangeDueDate, yearInputRef } = useCardDueDate();
  const [owner, handleChangeOwner] = useInput({
    initialValue: "",
    isValid: isValidOwnerLength,
  });
  const [cvc, handleChangeCvc] = useInput({
    initialValue: "",
    isValid: isValidCvc,
  });
  const { password, handleChangePassword, secondPasswordInputRef } =
    useCardPassword();
  const [allRequired, setAllRequired] = useState(false);

  useEffect(() => {
    setAllRequired(
      cardNumbers.join("").length === CARD_NUMBER.UNIT_LENGTH * 4 &&
        dueDate.month.length === DUE_DATE.UNIT_LENGTH &&
        dueDate.year.length === DUE_DATE.UNIT_LENGTH &&
        cvc.length === CVC.UNIT_LENGTH &&
        password.firstPassword &&
        password.secondPassword
    );
  }, [cardNumbers, dueDate, cvc, password]);

  const handleSubmit = () => {
    alert("카드가 등록되었습니다");
  };

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Button>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
              stroke="#525252"
              strokeWidth="1.5"
            />
          </svg>
        </Button>
        <h2>카드 추가</h2>
      </HeaderWrapper>
      <CardWrapper>
        <Card
          size="small"
          company="우테코"
          cardNumbers={cardNumbers}
          owner={owner || "NAME"}
          dueMonth={dueDate.month || "MM"}
          dueYear={dueDate.year || "YY"}
        />
      </CardWrapper>
      <CardNumberInput
        cardNumbers={cardNumbers}
        handleChangeCardNumber={handleChangeCardNumber}
        cardNumberInputRefs={cardNumberInputRefs}
      />
      <CardDueDateInput
        dueDate={dueDate}
        handleChangeDueDate={handleChangeDueDate}
        yearInputRef={yearInputRef}
      />
      <CardOwnerInput owner={owner} handleChangeOwner={handleChangeOwner} />
      <CardCVCInput cvc={cvc} handleChangeCvc={handleChangeCvc} />
      <CardPasswordInput
        password={password}
        handleChangePassword={handleChangePassword}
        secondPasswordInputRef={secondPasswordInputRef}
      />
      <FooterWrapper>
        {allRequired && <Button onClick={handleSubmit}>다음</Button>}
      </FooterWrapper>
    </PageWrapper>
  );
}

export default CardAddPage;
