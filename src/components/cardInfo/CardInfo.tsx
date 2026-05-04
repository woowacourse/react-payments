import CardInfoInput from "../common/CardInfoInput";
import CardInfoHeader from "../common/CardInfoHeader";
import { CardInfoWrapper, CardInfoSection } from "./CardInfo.styles";
import {
  INPUT_CVC_NUMBER_CONFIG,
  INPUT_CARD_EXPIRE_NUMBER_CONFIG,
  INPUT_CARD_NUMBER_CONFIG,
} from "./constants";
import { type CardFormType } from "../../types/types";

export default function CardInfo({
  cardNumber,
  setCardNumber,
  expireDate,
  setExpireDate,
  cvcNumber,
  setCvcNumber,
}: CardFormType) {
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
          setInputValue={setCardNumber}
          // validate={validate}
          // errorMessage={cardNumber}
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
          inputValue={expireDate}
          setInputValue={setExpireDate}
        />
      </CardInfoSection>

      <CardInfoSection>
        <CardInfoHeader guide="CVC 번호를 입력해 주세요" subGuide="" />
        <CardInfoInput
          inputLabel="CVC"
          inputConfig={INPUT_CVC_NUMBER_CONFIG}
          inputValue={cvcNumber}
          setInputValue={setCvcNumber}
        />
      </CardInfoSection>
    </CardInfoWrapper>
  );
}
