import type { Dispatch, SetStateAction } from "react";
import CardInfoHeader from "./CardInfoHeader";
import CardInfoInput from "./CardInfoInput";
import styled from "@emotion/styled";

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
  const handleCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;

    setCardNumber(() => {
      const newArray = [...cardNumber];
      newArray[index] = newValue;
      return newArray;
    });
  };

  const handleCardInfo = (
    state: string[],
    setState: Dispatch<SetStateAction<string[]>>,
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;

    setState(() => {
      const newArray = [...state];
      newArray[index] = newValue;
      return newArray;
    });
  };

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
            />
          ))}
        </CardInfoInput>
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
            onChange={(e) => handleCardInfo(expireDate, setExpireDate, e, 0)}
          />
          <InfoInput
            placeholder="YY"
            maxLength={2}
            value={expireDate[1]}
            onChange={(e) => handleCardInfo(expireDate, setExpireDate, e, 1)}
          />
        </CardInfoInput>
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
            onChange={(e) => handleCardInfo(cvcNumber, setCvcNumber, e, 0)}
          />
        </CardInfoInput>
      </CardInfoSection>
    </CardInfoWrapper>
  );
}

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 45px 30px 20px 30px;
  gap: 16px;
`;

const CardInfoSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const InfoInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
`;
