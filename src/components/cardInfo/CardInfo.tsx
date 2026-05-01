import { type Dispatch, type SetStateAction } from "react";
import CardInfoHeader from "./cardInfoHeader/CardInfoHeader";
import CardInfoInput from "./cardInfoInput/CardInfoInput";
import {
  CardInfoWrapper,
  CardInfoSection,
  InfoInput,
  ErrorMessage,
} from "./CardInfo.styles";
import { useInputHandle } from "./useInputHandle";
import { useExpireDate } from "./useExpireDate";
interface CardInfoProps {
  cardNumber: string[];
  setCardNumber: Dispatch<SetStateAction<string[]>>;
  expireDate: string[];
  setExpireDate: Dispatch<SetStateAction<string[]>>;
  cvcNumber: string[];
  setCvcNumber: Dispatch<SetStateAction<string[]>>;
}

export default function CardInfo({
  cardNumber,
  setCardNumber,
  expireDate,
  setExpireDate,
  cvcNumber,
  setCvcNumber,
}: CardInfoProps) {
  const { error: cardNumberError, handleNumber: handleCardNumber } =
    useInputHandle(cardNumber, setCardNumber);
  const { expireDateError, handleExpireDate } = useExpireDate(
    expireDate,
    setExpireDate,
  );
  const { error: cvcNumberError, handleNumber: handleCvcNumber } =
    useInputHandle(cvcNumber, setCvcNumber);

  return (
    <CardInfoWrapper>
      <CardInfoSection>
        <CardInfoHeader
          guide="결제할 카드 번호를 입력해 주세요"
          subGuide="본인 명의의 카드만 결제 가능합니다."
        ></CardInfoHeader>
        <CardInfoInput inputTitle="카드 번호">
          {cardNumber.map((_: string, index: number) => (
            <InfoInput
              key={"card" + index}
              placeholder="1234"
              maxLength={4}
              value={cardNumber[index]}
              onChange={(e) => handleCardNumber(e, index)}
              inputMode="numeric"
            />
          ))}
        </CardInfoInput>
        <ErrorMessage>{cardNumberError}</ErrorMessage>
      </CardInfoSection>

      <CardInfoSection>
        <CardInfoHeader
          guide="카드 유효기간을 입력해 주세요"
          subGuide="월/년도(MMYY)를 순서대로 입력해 주세요."
        ></CardInfoHeader>
        <CardInfoInput inputTitle="유효기간">
          <InfoInput
            placeholder="MM"
            maxLength={2}
            value={expireDate[0]}
            onChange={(e) => handleExpireDate(e, 0)}
            inputMode="numeric"
          />
          <InfoInput
            placeholder="YY"
            maxLength={2}
            value={expireDate[1]}
            onChange={(e) => handleExpireDate(e, 1)}
            inputMode="numeric"
          />
        </CardInfoInput>
        <ErrorMessage>{expireDateError}</ErrorMessage>
      </CardInfoSection>

      <CardInfoSection>
        <CardInfoHeader
          guide="CVC 번호를 입력해 주세요"
          subGuide=""
        ></CardInfoHeader>
        <CardInfoInput inputTitle="CVC">
          <InfoInput
            placeholder="123"
            maxLength={3}
            value={cvcNumber[0]}
            onChange={(e) => handleCvcNumber(e, 0)}
            inputMode="numeric"
          />
        </CardInfoInput>
        <ErrorMessage>{cvcNumberError}</ErrorMessage>
      </CardInfoSection>
    </CardInfoWrapper>
  );
}
