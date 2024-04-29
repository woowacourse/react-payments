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
import useCardIssuer from "../hooks/useCardIssuer";
import useCardNumbers from "../hooks/useCardNumbers";
import useCardPassword from "../hooks/useCardPassword";
import useCardPreview from "../hooks/useCardPreview";
import { useNavigate } from "react-router-dom";
import useProgress from "../hooks/useProgress";

export default function CardRegistrationPage() {
  const navigate = useNavigate();

  const { isCardFrontView, flipCard, showCardFront, showCardBack } =
    useCardPreview();

  const { cardNumberInputs, cardNumbersValue, isCardNumberComplete } =
    useCardNumbers({ onFocus: showCardFront });

  const { cardIssuerValue, setCardIssuer, isCardIssuerComplete } =
    useCardIssuer();

  const {
    expirationPeriodInputs,
    cardExpirationPeriodValue,
    isCardExpirationPeriodComplete,
  } = useCardExpirationPeriod({
    onFocus: showCardFront,
  });
  const { holderInput, cardHolderValue, isCardHolerComplete } = useCardHolder({
    onFocus: showCardFront,
  });
  const { cvcInput, cardCvcNumberValue, isCardCvcNumberComplete } =
    useCardCvcNumber({ onFocus: showCardBack });
  const { passwordInput, isCardPasswordComplete } = useCardPassword({
    onFocus: showCardFront,
  });

  const isCompleteArray = [
    isCardNumberComplete,
    isCardIssuerComplete,
    isCardExpirationPeriodComplete,
    isCardHolerComplete,
    isCardCvcNumberComplete,
    isCardPasswordComplete,
  ];

  const curProgress = useProgress(isCompleteArray);

  const allComplete = isCompleteArray.every((result) => result === true);

  const onSubmitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/completed", {
      state: {
        cardNumber: cardNumbersValue[0],
        cardIssuer: cardIssuerValue,
      },
    });
  };

  const cardFormListJsx = [
    <CardNumbers cardNumberInputs={cardNumberInputs} />,
    <CardIssuer value={cardIssuerValue} setValue={setCardIssuer} />,
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
        flipCard={flipCard}
        cardType={matchCardType(cardNumbersValue.join(""))}
        cardNumbers={cardNumbersValue}
        cardExpirationPeriod={cardExpirationPeriodValue}
        cardHolder={cardHolderValue}
        cardIssuer={cardIssuerValue}
        cardCvcNumber={cardCvcNumberValue}
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
