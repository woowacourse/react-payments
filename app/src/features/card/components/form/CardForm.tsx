import styled from "@emotion/styled";
import { CardSection } from "./CardSection";
import { CardNumberInput } from "./CardNumberInput";
import { CardExpiryDateInput } from "./CardExpiryDateInput";
import { CardCVCInput } from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";
import { calculateCreateCardCurrentProgress } from "../../ProgressManager";
import { Button } from "../../style/Button";
import { convertCardBrandToIssuerCode } from "../../Converter";
import CardBrandSelect from "./CardBrandSelect";
import { joinCardNumber } from "../../Utils";
import type { CardNumber, CardExpiryDate, SetState } from "../../types";

interface CardFormProps {
  cardNumber: CardNumber;
  setCardNumber: SetState<CardNumber>;
  cardExpiryDate: CardExpiryDate;
  setCardExpiryDate: SetState<CardExpiryDate>;
  cardBrand: string | null;
  setCardBrand: (value: string) => void;
  cardCVC: string;
  setCardCVC: (value: string) => void;
  cardPassword: string;
  setCardPassword: (value: string) => void;
  gotoCreateCardDonePage: () => void;
}

export function CardForm({
  cardNumber,
  setCardNumber,
  cardExpiryDate,
  setCardExpiryDate,
  cardBrand,
  setCardBrand,
  cardCVC,
  setCardCVC,
  cardPassword,
  setCardPassword,
  gotoCreateCardDonePage,
}: CardFormProps) {
  const {
    cardNumberIsComplete,
    cardBrandIsComplete,
    cardExpiryDateIsComplete,
    cardCVCIsComplete,
    cardPasswordIsComplete,
    allComplete,
  } = calculateCreateCardCurrentProgress({
    cardNumber: joinCardNumber(cardNumber),
    cardBrand,
    cardExpiryDate: Object.values(cardExpiryDate).join(""),
    cardCVC,
    cardPassword,
  });

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.antolibank.com/cards", {
        method: "POST",
        body: JSON.stringify({
          cardNumber: joinCardNumber(cardNumber),
          // expiryDate를 MM/YY 형식으로 전환.
          cardExpiryDate: cardExpiryDate,
          cardCVC: cardCVC,
          cardIssuerCode: convertCardBrandToIssuerCode(cardBrand),
        }),
      });
      gotoCreateCardDonePage();
    } catch (err) {
      // 임시처리 입니다.
      // RTL과 함께 구현될 예정.
      console.log(err);
    }
  };

  return (
    <CardFormContainer onSubmit={handleSubmit}>
      <CardSection
        title={"비밀번호를 입력해 주세요"}
        subTitle={"앞의 2자리를 입력해주세요."}
        display={cardPasswordIsComplete}
      >
        <CardPasswordInput
          cardPassword={cardPassword}
          setCardPassword={setCardPassword}
        />
      </CardSection>
      <CardSection
        title={"CVC 번호를 입력해 주세요"}
        display={cardCVCIsComplete}
      >
        <CardCVCInput cardCVC={cardCVC} setCardCVC={setCardCVC} />
      </CardSection>
      <CardSection
        title={"카드 유효기간을 입력해 주세요"}
        subTitle={"월/년도(MMYY)를 순서대로 입력해 주세요."}
        display={cardExpiryDateIsComplete}
      >
        <CardExpiryDateInput
          cardExpiryDate={cardExpiryDate}
          setCardExpiryDate={setCardExpiryDate}
        />
      </CardSection>
      <CardSection
        title={"카드사를 선택해 주세요"}
        subTitle={"현재 국내 카드사만 가능합니다."}
        display={cardBrandIsComplete}
      >
        <CardBrandSelect cardBrand={cardBrand} setCardBrand={setCardBrand} />
      </CardSection>
      <CardSection
        title={"결제할 카드 번호를 입력해 주세요"}
        subTitle={"본인 명의의 카드만 결제 가능합니다."}
        display={cardNumberIsComplete}
      >
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
      </CardSection>
      <Button type="submit" disabled={!allComplete}>
        확인
      </Button>
    </CardFormContainer>
  );
}

const CardFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 24px 30px 20px 30px;
  box-sizing: border-box;
`;
