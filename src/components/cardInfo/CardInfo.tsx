import { useState, type Dispatch, type SetStateAction } from "react";
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
  const [cardNumberError, setCardNumberError] = useState("");
  const [expireDateError, setExpireDateError] = useState("");
  const [cvcNumberError, setCvcNumberError] = useState("");

  const handleCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;

    if (!/^\d+$/.test(newValue) && newValue) {
      setCardNumberError("숫자만 입력 가능합니다.");
      return;
    }

    setCardNumberError("");

    setCardNumber(() => {
      const newArray = [...cardNumber];
      newArray[index] = newValue;
      return newArray;
    });
  };

  const handleExpireDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;

    setExpireDateError("");

    if (!/^\d+$/.test(newValue) && newValue) {
      setExpireDateError("숫자만 입력 가능합니다.");
      return;
    }

    if (index === 0 && newValue) {
      const month = Number(newValue);

      if (month > 12) {
        setExpireDateError("1월~12월 사이를 입력해 주세요.");
      } else if (newValue.length === 1) {
        setExpireDateError("월을 01 ~ 12 형식으로 작성해주세요.");
      } else if (newValue.length === 2 && month === 0) {
        setExpireDateError("1월~12월 사이를 입력해 주세요.");
      } else {
        setExpireDateError("");
      }
    }

    setExpireDate(() => {
      const newArray = [...expireDate];
      newArray[index] = newValue;
      return newArray;
    });
  };

  const handleCvcNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newValue = e.target.value;

    if (!/^\d+$/.test(newValue) && newValue) {
      setCvcNumberError("숫자만 입력 가능합니다.");
      return;
    }

    setCvcNumberError("");

    setCvcNumber(() => {
      const newArray = [...cvcNumber];
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
              inputMode="numeric"
            />
          ))}
        </CardInfoInput>
        <p>{cardNumberError}</p>
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
        <p>{expireDateError}</p>
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
        <p>{cvcNumberError}</p>
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
