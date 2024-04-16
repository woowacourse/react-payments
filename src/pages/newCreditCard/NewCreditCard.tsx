import { useState } from "react";
import InputInfo from "../../components/inputInfo/InputInfo";
import Input from "../../components/input/Input";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import CardPreview from "../../components/cardPreview/CardPreview";
import { ICardInfo } from "../../types/type";

const NewCreditCard = () => {
  const [cardInfo, setCardInfo] = useState<ICardInfo>({
    cardNumbers: [0, 0, 0, 0],
    cardExpirationData: [0, 0],
    userName: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (value: string, index: number) => {
    const newCardInfo: ICardInfo = { ...cardInfo };
    if (!Number(value) && value !== "") {
      setErrorMessage("숫자만 입력 가능합니다.");
      return;
    } else {
      setErrorMessage("");
    }
    newCardInfo.cardNumbers[index] = Number(value);
    setCardInfo(newCardInfo);
  };

  return (
    <>
      <CardPreview cardInfo={cardInfo}></CardPreview>
      <InputInfo
        mainText="결제할 카드 번호를 입력해 주세요"
        subText="본인 명의의 카드만 결제 가능합니다."
      ></InputInfo>
      <form>
        {cardInfo.cardNumbers.map((cardNumber, index) => (
          <Input
            key={index}
            maxLength={4}
            handleChange={(e) => handleInputChange(e.target.value, index)}
          ></Input>
        ))}
      </form>
      {errorMessage && <ErrorMessage message={errorMessage}></ErrorMessage>}
    </>
  );
};

export default NewCreditCard;
