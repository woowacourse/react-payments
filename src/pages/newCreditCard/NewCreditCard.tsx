import { useState } from "react";
import Input from "../../components/input/Input";
import CardPreview from "../../components/cardPreview/CardPreview";
import { ICardInfo } from "../../types/type";
import NewCardInputSection from "../../components/newCardInputSection/NewCardInputSection";

const NewCreditCard = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    cardNumbers: [0, 0, 0, 0],
    cardExpiration: { month: 0, year: 0 },
    userName: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    cardNumbers: "",
    cardExpiration: "",
    userName: "",
  });

  const handleCardNumbersChange = (value: string, index: number) => {
    if (value !== "" && Number.isNaN(value)) {
      setErrorMessage({
        ...errorMessage,
        cardNumbers: "숫자만 입력 가능합니다.",
      });
      return;
    }

    if (value !== "" && value.length !== 4) {
      setErrorMessage({
        ...errorMessage,
        cardNumbers: "숫자 4자리를 입력해주세요.",
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      cardNumbers: "",
    });

    const newCardNumbers = [...cardInfo.cardNumbers];
    newCardNumbers[index] = Number(value);
    setCardInfo({
      ...cardInfo,
      cardNumbers: newCardNumbers,
    });
  };

  const handleCardExpirationChange = (value: string, type: string) => {
    if (value !== "" && Number.isNaN(value)) {
      setErrorMessage({
        ...errorMessage,
        cardExpiration: "숫자만 입력 가능합니다.",
      });
      return;
    }

    if (value !== "" && value.length !== 2) {
      setErrorMessage({
        ...errorMessage,
        cardExpiration: "숫자 2개를 정확히 입력해주세요.",
      });
      return;
    }

    if (value !== "" && type === "month" && !(Number(value) >= 1 && Number(value) <= 12)) {
      setErrorMessage({
        ...errorMessage,
        cardExpiration: "월은 1이상 12이하여야 합니다.",
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      cardExpiration: "",
    });

    setCardInfo({
      ...cardInfo,
      cardExpiration: {
        ...cardInfo.cardExpiration,
        [type]: Number(value),
      },
    });
  };

  const handleUserNameChange = (value: string) => {
    setCardInfo({
      ...cardInfo,
      userName: value,
    });

    if (value !== "" && !/^[a-zA-Z]+$/.test(value)) {
      setErrorMessage({
        ...errorMessage,
        userName: "영어만 입력 가능합니다.",
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      userName: "",
    });

    setCardInfo({
      ...cardInfo,
      userName: value.toUpperCase(),
    });
  };

  return (
    <>
      {/* 프리뷰 */}
      <CardPreview cardInfo={cardInfo}></CardPreview>

      {/* 입력 - 카드 번호 */}
      <NewCardInputSection
        mainText="결제할 카드 번호를 입력해 주세요"
        subText="본인 명의의 카드만 결제 가능합니다."
        errorMessage={errorMessage.cardNumbers}
      >
        {cardInfo.cardNumbers.map((cardNumber, index) => (
          <Input
            key={index}
            maxLength={4}
            placeholder="1234"
            onChange={(e) => handleCardNumbersChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>

      {/* 입력 - 유효 기간 */}
      <NewCardInputSection
        mainText="카드 유효기간을 입력해 주세요"
        subText="월/년도(MMYY)를 순서대로 입력해 주세요."
        errorMessage={errorMessage.cardExpiration}
      >
        <Input
          maxLength={2}
          placeholder="MM"
          onChange={(e) => handleCardExpirationChange(e.target.value, "month")}
        ></Input>
        <Input
          maxLength={2}
          placeholder="YY"
          onChange={(e) => handleCardExpirationChange(e.target.value, "year")}
        ></Input>
      </NewCardInputSection>

      {/* 입력 - 소유자 이름 */}
      <NewCardInputSection
        mainText="카드 소유자 이름을 입력해 주세요"
        errorMessage={errorMessage.userName}
      >
        <Input
          value={cardInfo.userName}
          placeholder="JOHN DOE"
          onChange={(e) => handleUserNameChange(e.target.value)}
        ></Input>
      </NewCardInputSection>
    </>
  );
};

export default NewCreditCard;
