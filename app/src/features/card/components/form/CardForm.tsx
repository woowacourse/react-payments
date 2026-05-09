import styled from "@emotion/styled";
import { CardSection } from "./CardSection";
import { CardNumberInput } from "./CardNumberInput";
import { CardExpiryDateInput } from "./CardExpiryDateInput";
import { CardCVCInput } from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";
import { CreateCardProgressManager } from "../../ProgressManager";
import { useNavigate } from "react-router";
import CardBrandSelect from "./CardBrandSelect";

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
}) {
  const progress = CreateCardProgressManager.calculateCurrentProgress(
    cardNumber,
    cardBrand,
    cardExpiryDate,
    cardCVC,
    cardPassword,
  );

  const navigate = useNavigate();

  const loadDonePage = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/card/done/", { state: { cardNumber } });
  };

  return (
    <CardFormContainer onSubmit={loadDonePage}>
      <CardSection
        title={"비밀번호를 입력해 주세요"}
        subTitle={"앞의 2자리를 입력해주세요."}
        display={progress["cardPassword"]}
      >
        <CardPasswordInput
          cardPassword={cardPassword}
          setCardPassword={setCardPassword}
        />
      </CardSection>
      <CardSection
        title={"CVC 번호를 입력해 주세요"}
        display={progress["cardCVC"]}
      >
        <CardCVCInput cardCVC={cardCVC} setCardCVC={setCardCVC} />
      </CardSection>
      <CardSection
        title={"카드 유효기간을 입력해 주세요"}
        subTitle={"월/년도(MMYY)를 순서대로 입력해 주세요."}
        display={progress["cardExpiryDate"]}
      >
        <CardExpiryDateInput
          cardExpiryDate={cardExpiryDate}
          setCardExpiryDate={setCardExpiryDate}
        />
      </CardSection>
      <CardSection
        title={"카드사를 선택해 주세요"}
        subTitle={"현재 국내 카드사만 가능합니다."}
        display={progress["cardBrand"]}
      >
        <CardBrandSelect cardBrand={cardBrand} setCardBrand={setCardBrand} />
      </CardSection>
      <CardSection
        title={"결제할 카드 번호를 입력해 주세요"}
        subTitle={"본인 명의의 카드만 결제 가능합니다."}
        display={progress["cardNumber"]}
      >
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
      </CardSection>
      <CardSubmitButton
        type="submit"
        disabled={progress["complete"] ? false : true}
      >
        확인
      </CardSubmitButton>
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

const CardSubmitButton = styled.button`
  background-color: #333333;
  padding: 20px 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  &:disabled {
    background-color: #3333334d;
    cursor: auto;
  }
`;
