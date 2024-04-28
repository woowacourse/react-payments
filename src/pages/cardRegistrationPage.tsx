/** @jsxImportSource @emotion/react */

import Button from "../components/common/Button";
import CardCvcNumber from "../components/CardCvcNumber";
import CardExpirationPeriod from "../components/CardExpirationPeriod";
import CardHolder from "../components/CardHolder";
import CardIssuer from "../components/CardIssuer";
import CardNumbers from "../components/CardNumbers";
import CardPassWord from "../components/CardPassword";
import CardPreview from "../components/CardPreview";
import ProgressBar from "../components/common/ProgressBar";
import { matchCardType } from "../domain/matchCardType";
import useCardCvcNumber from "../hooks/useCardCvcNumber";
import useCardExpirationPeriod from "../hooks/useCardExpirationPeriod";
import useCardHolder from "../hooks/useCardHolder";
import useCardNumbers from "../hooks/useCardNumbers";
import useCardPassword from "../hooks/useCardPassword";
import { useNavigate } from "react-router-dom";
import useProgress from "../hooks/useProgress";
import { useState } from "react";

export default function CardRegistrationPage() {
  const navigate = useNavigate();
  const [isCardFrontView, setIsCardFrontView] = useState(true);

  const { cardNumberInputs } = useCardNumbers({ onFocus: showCardFront });
  const [cardIssuer, setCardIssuer] = useState("");
  const { expirationPeriodInputs } = useCardExpirationPeriod({
    onFocus: showCardFront,
  });
  const { holderInput } = useCardHolder({ onFocus: showCardFront });
  const { cvcInput } = useCardCvcNumber({ onFocus: showCardBack });
  const { passwordInput } = useCardPassword({ onFocus: showCardFront });

  const cardNumbersValue = cardNumberInputs.map((input) => input.value) as [
    string,
    string,
    string,
    string,
  ];

  const cardExpirationPeriodValue = expirationPeriodInputs.map(
    (input) => input.value
  ) as [string, string];

  const isCardNumberComplete = cardNumberInputs
    .map((input) => input.isComplete)
    .every((result) => result === true);

  const isCardIssuerComplete = cardIssuer !== "";

  const isCardExpirationPeriodComplete = expirationPeriodInputs
    .map((input) => input.isComplete)
    .every((result) => result === true);

  const isCompleteArray = [
    isCardNumberComplete,
    isCardIssuerComplete,
    isCardExpirationPeriodComplete,
    holderInput.isComplete,
    cvcInput.isComplete,
    passwordInput.isComplete,
  ];

  const curProgress = useProgress(isCompleteArray);

  const allComplete = isCompleteArray.every((result) => result === true);

  function showCardFront() {
    setIsCardFrontView(true);
  }

  function showCardBack() {
    setIsCardFrontView(false);
  }

  const onSubmitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/completed", {
      state: {
        cardNumber: cardNumbersValue[0],
        cardIssuer: cardIssuer,
      },
    });
  };

  const cardFormListJsx = [
    <CardNumbers cardNumberInputs={cardNumberInputs} />,
    <CardIssuer value={cardIssuer} setValue={setCardIssuer} />,
    <CardExpirationPeriod expirationPeriodInputs={expirationPeriodInputs} />,
    <CardHolder holderInput={holderInput} />,
    <CardCvcNumber cvcInput={cvcInput} />,
    <CardPassWord passwordInput={passwordInput} />,
  ];

  return (
    <div css={styledCardInfoContainer}>
      <ProgressBar
        totalProgress={cardFormListJsx.length}
        curProgress={curProgress}
      />
      <CardPreview
        isCardFrontView={isCardFrontView}
        setIsCardFrontView={setIsCardFrontView}
        cardType={matchCardType(cardNumbersValue.join(""))}
        cardNumbers={cardNumbersValue}
        cardExpirationPeriod={cardExpirationPeriodValue}
        cardHolder={holderInput.value}
        cardIssuer={cardIssuer}
        cardCvcNumber={cvcInput.value}
      />
      <form css={styledForm}>
        {cardFormListJsx.map((component: JSX.Element, index: number) => {
          if (index <= curProgress) {
            return <div key={index}>{component}</div>;
          }
          return;
        })}
      </form>
      {allComplete && (
        <div css={styledConfirmButtonBox}>
          <Button buttonType="fullScreen" onClickHandler={onSubmitHandler}>
            확인
          </Button>
        </div>
      )}
    </div>
  );
}

const styledCardInfoContainer = {
  width: "315px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",

  margin: "auto",
  marginTop: "50px",
};

const styledForm = {
  width: "100%",
  display: "flex",
  flexDirection: "column-reverse" as const,
  gap: "16px",
};

const styledConfirmButtonBox = {
  width: "100%",
  position: "sticky" as const,
  bottom: "0px",

  boxShadow: "2px -2px 4px #999",

  zIndex: "5",
};
