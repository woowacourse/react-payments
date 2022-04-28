import { useState, useRef, useEffect } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

import CardNumberForm from "./CardNumberForm";
import CardDueDateForm from "./CardDueDateForm";
import CardOwnerForm from "./CardOwnerForm";
import CardCVCForm from "./CardCVCForm";
import CardPasswordForm from "./CardPasswordForm";

import {
  PageWrapper,
  HeaderWrapper,
  CardWrapper,
  FooterWrapper,
} from "./style";
import {
  CARD_NUMBER,
  DUE_DATE,
  OWNER,
  CVC,
  PASSWORD,
  COLORS,
  MONTH,
} from "../../constant";

function CardAddPage() {
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [dueDate, setDueDate] = useState({ month: "", year: "" });
  const [owner, setOwner] = useState("");
  const [cvc, setCvc] = useState("");
  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });
  const [allRequired, setAllRequired] = useState(false);
  const [error, setError] = useState({ month: false, year: false });

  useEffect(() => {
    setAllRequired(
      cardNumbers.join("").length >= CARD_NUMBER.UNIT_LENGTH * 4 &&
        dueDate.month.length >= DUE_DATE.UNIT_LENGTH &&
        dueDate.year.length >= DUE_DATE.UNIT_LENGTH &&
        owner &&
        cvc.length >= CVC.UNIT_LENGTH &&
        password.firstPassword &&
        password.secondPassword
    );
  }, [cardNumbers, dueDate, owner, cvc, password, error]);

  const secondCardNumberInputRef = useRef();
  const thirdCardNumberInputRef = useRef();
  const fourthCardNumberInputRef = useRef();

  const dueYearInputRef = useRef();

  const secondPasswordInputRef = useRef();

  const cardNumberInputRefs = [
    null,
    secondCardNumberInputRef,
    thirdCardNumberInputRef,
    fourthCardNumberInputRef,
  ];

  const focusNextNumberInput = (index) => {
    cardNumberInputRefs[index]?.current.focus();
  };

  const handleCardNumber = (index, { target: { value } }) => {
    if (value.length > CARD_NUMBER.UNIT_LENGTH || isNaN(value)) return;

    setCardNumbers((prev) => {
      const newState = [...prev];
      newState[index] = value;
      return newState;
    });

    if (value.length >= CARD_NUMBER.UNIT_LENGTH) {
      focusNextNumberInput(index + 1);
    }
  };

  const handleDueDate = (key, { target: { value } }) => {
    if (value.length > DUE_DATE.UNIT_LENGTH) return;

    setDueDate({ ...dueDate, [key]: value });

    if (key === "month") {
      setError({ ...error, [key]: value > MONTH.MAX || value < MONTH.MIN });
    } else {
      const currentYear = new Date().getFullYear().toString().slice(2);
      setError({ ...error, [key]: value < currentYear });
    }

    if (value.length >= DUE_DATE.UNIT_LENGTH) {
      dueYearInputRef.current.focus();
    }
  };

  const handleOwner = ({ target: { value } }) => {
    if (value.length > OWNER.MAX_LENGTH) return;

    setOwner(value);
  };

  const handleCvc = ({ target: { value } }) => {
    if (value.length > CVC.UNIT_LENGTH || isNaN(value)) return;

    setCvc(value);
  };

  const handlePassword = (key, { target: { value } }) => {
    if (value.length > PASSWORD.UNIT_LENGTH || isNaN(value)) return;

    setPassword({ ...password, [key]: value });

    if (value.length >= 1) {
      secondPasswordInputRef.current.focus();
    }
  };

  const handleSubmit = () => {
    if (error.month || error.year) {
      alert("만료일을 확인해주세요");
      return;
    }
    alert(`${owner}님의 카드가 등록되었습니다`);
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
      <CardNumberForm
        cardNumbers={cardNumbers}
        handleCardNumber={handleCardNumber}
        cardNumberInputRefs={cardNumberInputRefs}
      />
      <CardDueDateForm
        dueDate={dueDate}
        handleDueDate={handleDueDate}
        dueYearInputRef={dueYearInputRef}
        error={error}
      />
      <CardOwnerForm owner={owner} handleOwner={handleOwner} />
      <CardCVCForm cvc={cvc} handleCvc={handleCvc} />
      <CardPasswordForm
        password={password}
        handlePassword={handlePassword}
        secondPasswordInputRef={secondPasswordInputRef}
      />
      <FooterWrapper>
        {allRequired && (
          <Button color={COLORS.MINT} onClick={handleSubmit}>
            다음
          </Button>
        )}
      </FooterWrapper>
    </PageWrapper>
  );
}

export default CardAddPage;
