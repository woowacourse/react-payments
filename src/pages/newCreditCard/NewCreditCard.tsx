import { useState } from "react";
import Input from "../../components/input/Input";
import CardPreview from "../../components/cardPreview/CardPreview";
import { ICardInfo } from "../../types/type";
import NewCardInputSection from "../../components/newCardInputSection/NewCardInputSection";
import { NewCreditCardContainer } from "./NewCreditCard.styles";
import { validateCardExpiration, validateCardNumber, validateUserName } from "../../validators/newCardInputValidator";

const NewCreditCard = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    cardNumbers: [0, 0, 0, 0],
    cardExpiration: [0, 0],
    userName: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    cardNumbers: ["", "", "", ""],
    cardExpiration: ["", ""],
    userName: [""],
  });

  const handleCardNumbersChange = (value: string, index: number) => {
    const errorMessageCopy = [...errorMessage.cardNumbers];
    errorMessageCopy[index] = validateCardNumber(value);

    setErrorMessage({
      ...errorMessage,
      cardNumbers: errorMessageCopy,
    });

    if (errorMessageCopy[index] === "") {
      const newCardNumbers = [...cardInfo.cardNumbers];
      newCardNumbers[index] = Number(value);
      setCardInfo({
        ...cardInfo,
        cardNumbers: newCardNumbers,
      });
    }
  };

  const handleCardExpirationChange = (value: string, index: number) => {
    const errorMessageCopy = [...errorMessage.cardExpiration];
    errorMessageCopy[index] = validateCardExpiration(value, index);

    setErrorMessage({
      ...errorMessage,
      cardExpiration: errorMessageCopy,
    });

    if (errorMessageCopy[index] === "") {
      const newCardExpiration = [...cardInfo.cardExpiration];
      newCardExpiration[index] = Number(value);
      setCardInfo({
        ...cardInfo,
        cardExpiration: newCardExpiration,
      });
    }
  };

  const handleUserNameChange = (value: string) => {
    const errorMessageCopy = validateUserName(value);

    setErrorMessage({
      ...errorMessage,
      userName: [errorMessageCopy],
    });

    if (errorMessageCopy === "") {
      setCardInfo({
        ...cardInfo,
        userName: value.toUpperCase(),
      });
    }
  };

  return (
    <NewCreditCardContainer>
      {/* 프리뷰 */}
      <CardPreview cardInfo={cardInfo}></CardPreview>
      {/* 입력 - 카드 번호 */}
      <NewCardInputSection
        label="카드 번호"
        mainText="결제할 카드 번호를 입력해 주세요"
        subText="본인 명의의 카드만 결제 가능합니다."
        errorMessage={errorMessage.cardNumbers}
      >
        {cardInfo.cardNumbers.map((cardNumber, index) => (
          <Input
            key={index}
            maxLength={4}
            placeholder="1234"
            isError={!!errorMessage.cardNumbers[index]}
            onChange={(e) => handleCardNumbersChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>
      {/* 입력 - 유효 기간 */}
      <NewCardInputSection
        label="유효기간"
        mainText="카드 유효기간을 입력해 주세요"
        subText="월/년도(MMYY)를 순서대로 입력해 주세요."
        errorMessage={errorMessage.cardExpiration}
      >
        {cardInfo.cardExpiration.map((cardNumber, index) => (
          <Input
            key={index}
            maxLength={2}
            placeholder={index === 0 ? "MM" : "YY"}
            isError={!!errorMessage.cardExpiration[index]}
            onChange={(e) => handleCardExpirationChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>
      {/* 입력 - 소유자 이름 */}
      <NewCardInputSection
        label="소유자 이름"
        mainText="카드 소유자 이름을 입력해 주세요"
        subText=""
        errorMessage={errorMessage.userName}
      >
        <Input
          value={cardInfo.userName}
          placeholder="JOHN DOE"
          isError={!!errorMessage.userName[0]}
          onChange={(e) => handleUserNameChange(e.target.value)}
        ></Input>
      </NewCardInputSection>
    </NewCreditCardContainer>
  );
};

export default NewCreditCard;
