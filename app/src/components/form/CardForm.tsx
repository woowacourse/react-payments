import styled from "@emotion/styled";
import { CardSection } from "./CardSection";
import { CardNumberInputContainer } from "./CardNumberInput";
import { CardExpiryDateInputContainer } from "./CardExpiryDateInput";
import { CardCVCInputWrapper } from "./CardCVCInput";

export function CardForm({
  cardNumber,
  setCardNumber,
  cardExpiryDate,
  setCardExpiryDate,
  setNetworkBrand,
}) {
  return (
    <CardFormContainer>
      <CardSection
        title={"결제할 카드 번호를 입력해 주세요"}
        subTitle={"본인 명의의 카드만 결제 가능합니다."}
      >
        <CardNumberInputContainer
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          setNetworkBrand={setNetworkBrand}
        />
      </CardSection>
      <CardSection
        title={"카드 유효기간을 입력해 주세요"}
        subTitle={"월/년도(MMYY)를 순서대로 입력해 주세요."}
      >
        <CardExpiryDateInputContainer
          cardExpiryDate={cardExpiryDate}
          setCardExpiryDate={setCardExpiryDate}
        />
      </CardSection>
      <CardSection title={"CVC 번호를 입력해 주세요"}>
        <CardCVCInputWrapper />
      </CardSection>
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
