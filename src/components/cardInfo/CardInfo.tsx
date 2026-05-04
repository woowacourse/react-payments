import CardInfoInput from "../common/CardInfoInput";
import CardInfoHeader from "../common/CardInfoHeader";
import { CardInfoWrapper, CardInfoSection } from "./CardInfo.styles";
import {
  INPUT_CVC_NUMBER_CONFIG,
  INPUT_CARD_EXPIRE_NUMBER_CONFIG,
  INPUT_CARD_NUMBER_CONFIG,
} from "./constants";
import { type CardFormType } from "../../types/types";
import { useCardNumberInput } from "../../hooks/useCardNumberInput";
import { useExpireDateInput } from "../../hooks/useExpireDateInput";
import { useCvcNumberInput } from "../../hooks/useCvcNumberInput";

export default function CardInfo({
  cardNumber,
  setCardNumber,
  expireDate,
  setExpireDate,
  cvcNumber,
  setCvcNumber,
}: CardFormType) {
  const { cardNumberError, handleCardNumberChange } =
    useCardNumberInput(setCardNumber);
  const { expireDateError, handleExpireDateChange } =
    useExpireDateInput(setExpireDate);
  const { cvcNumberError, handleCvcNumberChange } =
    useCvcNumberInput(setCvcNumber);

  return (
    <CardInfoWrapper>
      <CardInfoSection>
        <CardInfoHeader
          guide="결제할 카드 번호를 입력해 주세요"
          subGuide="본인 명의의 카드만 결제 가능합니다."
        />
        <CardInfoInput
          inputLabel="카드 번호"
          inputConfig={INPUT_CARD_NUMBER_CONFIG}
          inputValue={cardNumber}
          handleChange={handleCardNumberChange}
          errorMessage={cardNumberError}
        />
      </CardInfoSection>

      <CardInfoSection>
        <CardInfoHeader
          guide="카드 유효기간을 입력해 주세요"
          subGuide="월/년도(MMYY)를 순서대로 입력해 주세요."
        />
        <CardInfoInput
          inputLabel="유효기간"
          inputConfig={INPUT_CARD_EXPIRE_NUMBER_CONFIG}
          inputValue={[expireDate.month, expireDate.year]}
          handleChange={handleExpireDateChange}
          errorMessage={expireDateError}
        />
      </CardInfoSection>

      <CardInfoSection>
        <CardInfoHeader guide="CVC 번호를 입력해 주세요" subGuide="" />
        <CardInfoInput
          inputLabel="CVC"
          inputConfig={INPUT_CVC_NUMBER_CONFIG}
          inputValue={cvcNumber}
          handleChange={handleCvcNumberChange}
          errorMessage={cvcNumberError}
        />
      </CardInfoSection>
    </CardInfoWrapper>
  );
}
