import { useState } from "react";
import Input from "../../components/input/Input";
import CardPreview from "../../components/cardPreview/CardPreview";
import { ICardInfo } from "../../types/type";
import NewCardInputSection from "../../components/newCardInputSection/NewCardInputSection";
import { NewCardContainer } from "./NewCardPage.styled";
import { validateCardExpiration, validateCardNumber, validateUserName } from "../../validators/newCardInputValidator";
import { FORM_FIELDS } from "../../constants/setting";

const NewCardPage = () => {
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
    <NewCardContainer>
      {/* 프리뷰 */}
      <CardPreview cardInfo={cardInfo}></CardPreview>

      {/* 입력 - 카드 번호 */}
      <NewCardInputSection
        label={FORM_FIELDS.CARD_NUMBERS.LABEL}
        mainText={FORM_FIELDS.CARD_NUMBERS.MAIN_TEXT}
        subText={FORM_FIELDS.CARD_NUMBERS.SUB_TEXT}
        errorMessage={errorMessage.cardNumbers}
      >
        {cardInfo.cardNumbers.map((_, index) => (
          <Input
            key={index}
            maxLength={FORM_FIELDS.CARD_NUMBERS.MAX_LENGTH}
            placeholder={FORM_FIELDS.CARD_NUMBERS.PLACEHOLDER}
            isError={!!errorMessage.cardNumbers[index]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCardNumbersChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>

      {/* 입력 - 유효 기간 */}
      <NewCardInputSection
        label={FORM_FIELDS.CARD_EXPIRATION.LABEL}
        mainText={FORM_FIELDS.CARD_EXPIRATION.MAIN_TEXT}
        subText={FORM_FIELDS.CARD_EXPIRATION.SUB_TEXT}
        errorMessage={errorMessage.cardExpiration}
      >
        {cardInfo.cardExpiration.map((_, index) => (
          <Input
            key={index}
            maxLength={FORM_FIELDS.CARD_EXPIRATION.MAX_LENGTH}
            placeholder={index === 0 ? FORM_FIELDS.CARD_EXPIRATION.PLACEHOLDER.MONTH : FORM_FIELDS.CARD_EXPIRATION.PLACEHOLDER.YEAR}
            isError={!!errorMessage.cardExpiration[index]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCardExpirationChange(e.target.value, index)}
          ></Input>
        ))}
      </NewCardInputSection>

      {/* 입력 - 소유자 이름 */}
      <NewCardInputSection
        label={FORM_FIELDS.USER_NAME.LABEL}
        mainText={FORM_FIELDS.USER_NAME.MAIN_TEXT}
        subText={FORM_FIELDS.USER_NAME.SUB_TEXT}
        errorMessage={errorMessage.userName}
      >
        <Input
          value={cardInfo.userName}
          maxLength={FORM_FIELDS.USER_NAME.MAX_LENGTH}
          placeholder={FORM_FIELDS.USER_NAME.PLACEHOLDER}
          isError={!!errorMessage.userName[0]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUserNameChange(e.target.value)}
        ></Input>
      </NewCardInputSection>
    </NewCardContainer>
  );
};

export default NewCardPage;
