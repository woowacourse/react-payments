import { useState } from "react";
import Input from "../../components/default/input/Input";
import CardPreview from "../../components/newCardPage/cardPreview/CardPreview";
import { CardInfo, CardCompany } from "../../types/type";
import NewCardInputSection from "../../components/newCardPage/newCardInputSection/NewCardInputSection";
import * as Styled from "./NewCardPage.styled";
import { validateCVC, validateCardExpiration, validateCardNumber, validatePassword, validateUserName } from "../../validators/newCardInputValidator";
import { FORM_FIELDS } from "../../constants/setting";
import Dropdown from "../../components/default/dropdown/Dropdown";

const NewCardPage = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    password: 0,
    cvc: 0,
    userName: "",
    cardExpiration: [0, 0],
    cardCompany: "",
    cardNumbers: [0, 0, 0, 0],
  });
  const [errorMessage, setErrorMessage] = useState({
    password: [""],
    cvc: [""],
    userName: [""],
    cardExpiration: ["", ""],
    cardCompany: [""],
    cardNumbers: ["", "", "", ""],
  });

  const handlePasswordChange = (value: string) => {
    const errorMessageCopy = validatePassword(value);

    setErrorMessage({
      ...errorMessage,
      password: [errorMessageCopy],
    });

    if (errorMessageCopy === "") {
      setCardInfo({
        ...cardInfo,
        password: Number(value),
      });
    }
  };

  const handleCVCChange = (value: string) => {
    const errorMessageCopy = validateCVC(value);

    setErrorMessage({
      ...errorMessage,
      cvc: [errorMessageCopy],
    });

    if (errorMessageCopy === "") {
      setCardInfo({
        ...cardInfo,
        cvc: Number(value),
      });
    }
  };

  const handleCardNumbersChange = (value: string, index: number) => {
    const updatedCardNumbers = cardInfo.cardNumbers.map((num, i) => {
      return i === index ? Number(value) : num;
    });

    const errorMessageCopy = errorMessage.cardNumbers.map((msg, i) => {
      return i === index ? validateCardNumber(value) : msg;
    });

    setErrorMessage({
      ...errorMessage,
      cardNumbers: errorMessageCopy,
    });

    if (errorMessageCopy[index] === "") {
      setCardInfo({
        ...cardInfo,
        cardNumbers: updatedCardNumbers,
      });
    }
  };

  const handleCardExpirationChange = (value: string, index: number) => {
    const updatedCardExpiration = cardInfo.cardExpiration.map((num, i) => {
      return i === index ? Number(value) : num;
    });

    const errorMessageCopy = errorMessage.cardExpiration.map((msg, i) => {
      return i === index ? validateCardExpiration(value, index) : msg;
    });

    setErrorMessage({
      ...errorMessage,
      cardExpiration: errorMessageCopy,
    });

    if (errorMessageCopy[index] === "") {
      setCardInfo({
        ...cardInfo,
        cardExpiration: updatedCardExpiration,
      });
    }
  };

  const handleCardCompanyChange = (value: CardCompany) => {
    setCardInfo({
      ...cardInfo,
      cardCompany: value,
    });
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
    <Styled.NewCardContainer>
      {/* 프리뷰 */}
      <CardPreview cardInfo={cardInfo}></CardPreview>
      <Styled.InputSection>
        {/* 입력 - 비밀번호 */}
        <NewCardInputSection
          mainText={FORM_FIELDS.PASSWORD.MAIN_TEXT}
          subText={FORM_FIELDS.PASSWORD.SUB_TEXT}
          label={FORM_FIELDS.PASSWORD.LABEL}
          errorMessage={errorMessage.password}
        >
          <Input
            type="password"
            maxLength={FORM_FIELDS.PASSWORD.MAX_LENGTH}
            placeholder={FORM_FIELDS.PASSWORD.PLACEHOLDER}
            isError={!!errorMessage.password[0]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e.target.value)}
          ></Input>
        </NewCardInputSection>

        {/* 입력 - CVC */}
        <NewCardInputSection
          mainText={FORM_FIELDS.CVC.MAIN_TEXT}
          subText={FORM_FIELDS.CVC.SUB_TEXT}
          label={FORM_FIELDS.CVC.LABEL}
          errorMessage={errorMessage.cvc}
        >
          <Input
            maxLength={FORM_FIELDS.CVC.MAX_LENGTH}
            placeholder={FORM_FIELDS.CVC.PLACEHOLDER}
            isError={!!errorMessage.cvc[0]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCVCChange(e.target.value)}
          ></Input>
        </NewCardInputSection>

        {/* 입력 - 소유자 이름 */}
        <NewCardInputSection
          mainText={FORM_FIELDS.USER_NAME.MAIN_TEXT}
          subText={FORM_FIELDS.USER_NAME.SUB_TEXT}
          label={FORM_FIELDS.USER_NAME.LABEL}
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

        {/* 입력 - 유효 기간 */}
        <NewCardInputSection
          mainText={FORM_FIELDS.CARD_EXPIRATION.MAIN_TEXT}
          subText={FORM_FIELDS.CARD_EXPIRATION.SUB_TEXT}
          label={FORM_FIELDS.CARD_EXPIRATION.LABEL}
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

        {/* 입력 - 카드사 */}
        <NewCardInputSection
          mainText={FORM_FIELDS.CARD_COMPANY.MAIN_TEXT}
          subText={FORM_FIELDS.CARD_COMPANY.SUB_TEXT}
          label={FORM_FIELDS.CARD_COMPANY.LABEL}
          errorMessage={[""]}
        >
          <Dropdown
            selectList={FORM_FIELDS.CARD_COMPANY.OPTIONS}
            onChange={(selectedValue: CardCompany) => handleCardCompanyChange(selectedValue)}
          />
        </NewCardInputSection>

        {/* 입력 - 카드 번호 */}
        <NewCardInputSection
          mainText={FORM_FIELDS.CARD_NUMBERS.MAIN_TEXT}
          subText={FORM_FIELDS.CARD_NUMBERS.SUB_TEXT}
          label={FORM_FIELDS.CARD_NUMBERS.LABEL}
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
      </Styled.InputSection>
    </Styled.NewCardContainer>
  );
};

export default NewCardPage;
