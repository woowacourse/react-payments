import { useState } from "react";
import styled from "@emotion/styled";
import { CardSection } from "./CardSection";
import { CardNumberInput } from "./CardNumberInput";
import { CardExpiryDateInput } from "./CardExpiryDateInput";
import { CardCVCInput } from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";
import CardBrandSelect from "./CardBrandSelect";

export function CardForm({
  cardNumber,
  setCardNumber,
  cardExpiryDate,
  setCardExpiryDate,
  cardBrand,
  setCardBrand,
}) {
  const [progress, setProgress] = useState({
    cardNumber: true,
    cardBrand: false,
    cardExpiryDate: false,
    cardCVCNumber: false,
    cardPassword: false,
  });

  return (
    <CardFormContainer>
      <CardSection
        title={"비밀번호를 입력해 주세요"}
        subTitle={"앞의 2자리를 입력해주세요."}
        display={progress["cardPassword"]}
      >
        <CardPasswordInput />
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
        <CardBrandSelect
          cardBrand={cardBrand}
          setCardBrand={setCardBrand}
          progress={progress}
          setProgress={setProgress}
        />
      </CardSection>
      <CardSection
        title={"결제할 카드 번호를 입력해 주세요"}
        subTitle={"본인 명의의 카드만 결제 가능합니다."}
        display={progress["cardNumber"]}
      >
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          progress={progress}
          setProgress={setProgress}
        />
      </CardSection>
      <CardSection
        title={"CVC 번호를 입력해 주세요"}
        display={progress["cardCVCNumber"]}
      >
        <CardCVCInput />
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
