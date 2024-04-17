import { useState } from "react";
import Input from "../../components/input/Input";
import CardPreview from "../../components/cardPreview/CardPreview";
import { ICardInfo } from "../../types/type";
import NewCardInputSection from "../../components/newCardInputSection/NewCardInputSection";

const NewCreditCard = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    cardNumbers: [0, 0, 0, 0],
    cardExpirationData: [0, 0],
    userName: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    cardNumbers: "",
    cardExpirationData: "",
    userName: "",
  });

  const handleInputChange = (value: string, index: number) => {
    const newCardInfo: ICardInfo = { ...cardInfo };
    if (!Number(value) && value !== "") {
      setErrorMessage({
        ...errorMessage,
        cardNumbers: "숫자만 입력 가능합니다.",
      });
      return;
    } else {
      setErrorMessage({
        ...errorMessage,
        cardNumbers: "",
      });
    }
    newCardInfo.cardNumbers[index] = Number(value);
    setCardInfo(newCardInfo);
  };

  return (
    <>
      <CardPreview cardInfo={cardInfo}></CardPreview>
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
            onChange={(e) => handleInputChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>
    </>
  );
};

export default NewCreditCard;
