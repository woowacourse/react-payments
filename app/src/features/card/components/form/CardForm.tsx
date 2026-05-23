import styled from "@emotion/styled";
import { CardSection } from "./CardSection";
import { CardNumberInput } from "./CardNumberInput";
import { CardExpiryDateInput } from "./CardExpiryDateInput";
import { CardCVCInput } from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";
import { calculateCreateCardCurrentProgress } from "../../ProgressManager";
import { Button } from "../../style/Button";
import { ErrorMessage } from "./ErrorMessage";
import { convertCardBrandToIssuerCode } from "../../Converter";
import CardBrandSelect from "./CardBrandSelect";
import { joinCardNumber } from "../../Utils";
import type { CardNumber, SetState } from "../../types";
import useCardSubmit from "../../hooks/useCardSubmit";
import type { ExpiryDate } from "../../ExpiryDate";

interface CardFormProps {
  cardNumber: CardNumber;
  setCardNumber: SetState<CardNumber>;
  cardExpiryDate: ExpiryDate;
  setCardExpiryDate: SetState<ExpiryDate>;
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
  const fullCardNumber = joinCardNumber(cardNumber);
  const issuerCode = convertCardBrandToIssuerCode(cardBrand!) ?? "";

  const {
    cardNumberIsComplete,
    cardBrandIsComplete,
    cardExpiryDateIsComplete,
    cardCVCIsComplete,
    cardPasswordIsComplete,
    allComplete,
  } = calculateCreateCardCurrentProgress({
    cardNumber: fullCardNumber,
    cardBrand,
    cardExpiryDate: cardExpiryDate.toMMYY(),
    cardCVC,
    cardPassword,
  });

  const { formErrorCodes, submitError, submitCard } = useCardSubmit();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await submitCard(
      fullCardNumber,
      cardExpiryDate.toSlashFormat(),
      cardCVC,
      issuerCode,
    );
    if (success) gotoCreateCardDonePage();
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
        <CardCVCInput
          cardCVC={cardCVC}
          setCardCVC={setCardCVC}
          formErrorCodes={formErrorCodes}
        />
      </CardSection>
      <CardSection
        title={"카드 유효기간을 입력해 주세요"}
        subTitle={"월/년도(MMYY)를 순서대로 입력해 주세요."}
        display={cardExpiryDateIsComplete}
      >
        <CardExpiryDateInput
          cardExpiryDate={cardExpiryDate}
          setCardExpiryDate={setCardExpiryDate}
          formErrorCodes={formErrorCodes}
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
          formErrorCodes={formErrorCodes}
        />
      </CardSection>
      <Button type="submit" disabled={!allComplete}>
        확인
      </Button>
      {submitError && (
        <ErrorMessage
          messages={[submitError]}
          style={{ textAlign: "center" }}
        />
      )}
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
