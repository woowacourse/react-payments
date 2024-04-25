import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/default/input/Input";
import CardPreview from "../../components/newCardPage/cardPreview/CardPreview";
import { CardInfo, CardCompany } from "../../types/type";
import NewCardInputSection from "../../components/newCardPage/newCardInputSection/NewCardInputSection";
import * as Styled from "./NewCardPage.styled";
import { validateCVC, validateCardExpiration, validateCardNumber, validatePassword, validateUserName } from "../../validators/newCardInputValidator";
import { FORM_FIELDS } from "../../constants/setting";
import Dropdown from "../../components/default/dropdown/Dropdown";

const NewCardPage = () => {
  const navigate = useNavigate();
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    password: 0,
    cvc: 0,
    userName: "",
    cardExpiration: [0, 0],
    cardCompany: "",
    cardNumbers: [0, 0, 0, 0],
  });
  const [fieldState, setFieldState] = useState({
    password: { errorMessage: [""], isNextVisible: false, isValid: false },
    cvc: { errorMessage: [""], isNextVisible: false, isValid: false },
    userName: { errorMessage: [""], isNextVisible: false, isValid: false },
    cardExpiration: { errorMessage: ["", ""], isNextVisible: false, isValid: false },
    cardCompany: { errorMessage: [""], isNextVisible: false, isValid: false },
    cardNumbers: { errorMessage: ["", "", "", ""], isNextVisible: false, isValid: false },
  });

  const handlePasswordChange = (value: string) => {
    const errorMessage = validatePassword(value);
    const isValid = !!(value && errorMessage === "");
    const isNextVisible = fieldState.password.isNextVisible || isValid;

    if (isValid) {
      setCardInfo({
        ...cardInfo,
        password: Number(value),
      });
    }

    setFieldState((prevStatus) => ({
      ...prevStatus,
      password: {
        ...prevStatus.password,
        errorMessage: [errorMessage],
        isNextVisible,
        isValid,
      },
    }));
  };

  const handleCVCChange = (value: string) => {
    const errorMessage = validateCVC(value);
    const isValid = !!(value && errorMessage === "");
    const isNextVisible = fieldState.cvc.isNextVisible || isValid;

    if (isValid) {
      setCardInfo({
        ...cardInfo,
        cvc: Number(value),
      });
    }

    setFieldState((prevStatus) => ({
      ...prevStatus,
      cvc: {
        ...prevStatus.cvc,
        errorMessage: [errorMessage],
        isNextVisible,
        isValid,
      },
    }));
  };

  const handleUserNameChange = (value: string) => {
    const errorMessage = validateUserName(value);
    const isValid = !!(value && errorMessage === "");
    const isNextVisible = fieldState.userName.isNextVisible || isValid;

    if (isValid) {
      setCardInfo({
        ...cardInfo,
        userName: value.toUpperCase(),
      });
    }

    setFieldState((prevStatus) => ({
      ...prevStatus,
      userName: {
        ...prevStatus.userName,
        errorMessage: [errorMessage],
        isNextVisible,
        isValid,
      },
    }));
  };

  const handleCardExpirationChange = (value: string, index: number) => {
    const updatedCardExpiration = cardInfo.cardExpiration.map((num, i) => {
      return i === index ? Number(value) : num;
    });

    const errorMessage = fieldState.cardExpiration.errorMessage.map((msg, i) => {
      return i === index ? validateCardExpiration(value, index) : msg;
    });

    const isValid = updatedCardExpiration.every((number) => number !== 0) && errorMessage.every((message) => message === "");
    const isNextVisible = fieldState.cardExpiration.isNextVisible || isValid;

    if (errorMessage[index] === "") {
      setCardInfo({
        ...cardInfo,
        cardExpiration: updatedCardExpiration,
      });
    }

    setFieldState((prevStatus) => ({
      ...prevStatus,
      cardExpiration: {
        ...prevStatus.cardExpiration,
        errorMessage,
        isNextVisible,
        isValid,
      },
    }));
  };

  const handleCardCompanyChange = (value: CardCompany) => {
    setCardInfo({
      ...cardInfo,
      cardCompany: value,
    });

    setFieldState((prevStatus) => ({
      ...prevStatus,
      cardCompany: {
        ...prevStatus.cardCompany,
        isNextVisible: fieldState.cardCompany.isNextVisible || !!value,
        isValid: !!value,
      },
    }));
  };

  const handleCardNumbersChange = (value: string, index: number) => {
    const updatedCardNumbers = cardInfo.cardNumbers.map((num, i) => {
      return i === index ? Number(value) : num;
    });

    const errorMessage = fieldState.cardNumbers.errorMessage.map((msg, i) => {
      return i === index ? validateCardNumber(value) : msg;
    });

    const isValid = updatedCardNumbers.every((number) => number !== 0) && errorMessage.every((message) => message === "");
    const isNextVisible = fieldState.cardNumbers.isNextVisible || isValid;

    if (errorMessage[index] === "") {
      setCardInfo({
        ...cardInfo,
        cardNumbers: updatedCardNumbers,
      });
    }

    setFieldState((prevStatus) => ({
      ...prevStatus,
      cardNumbers: {
        ...prevStatus.cardNumbers,
        errorMessage,
        isNextVisible,
        isValid,
      },
    }));
  };

  return (
    <Styled.NewCardContainer>
      {/* 프리뷰 */}
      <CardPreview cardInfo={cardInfo}></CardPreview>
      <Styled.InputSection>
        {/* 입력 - 비밀번호 */}
        {fieldState.cvc.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.PASSWORD.MAIN_TEXT}
            subText={FORM_FIELDS.PASSWORD.SUB_TEXT}
            label={FORM_FIELDS.PASSWORD.LABEL}
            errorMessage={fieldState.password.errorMessage}
          >
            <Input
              type="password"
              maxLength={FORM_FIELDS.PASSWORD.MAX_LENGTH}
              placeholder={FORM_FIELDS.PASSWORD.PLACEHOLDER}
              isError={!!fieldState.password.errorMessage[0]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e.target.value)}
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - CVC */}
        {fieldState.userName.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.CVC.MAIN_TEXT}
            subText={FORM_FIELDS.CVC.SUB_TEXT}
            label={FORM_FIELDS.CVC.LABEL}
            errorMessage={fieldState.cvc.errorMessage}
          >
            <Input
              maxLength={FORM_FIELDS.CVC.MAX_LENGTH}
              placeholder={FORM_FIELDS.CVC.PLACEHOLDER}
              isError={!!fieldState.cvc.errorMessage[0]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCVCChange(e.target.value)}
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - 소유자 이름 */}
        {fieldState.cardExpiration.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.USER_NAME.MAIN_TEXT}
            subText={FORM_FIELDS.USER_NAME.SUB_TEXT}
            label={FORM_FIELDS.USER_NAME.LABEL}
            errorMessage={fieldState.userName.errorMessage}
          >
            <Input
              value={cardInfo.userName}
              maxLength={FORM_FIELDS.USER_NAME.MAX_LENGTH}
              placeholder={FORM_FIELDS.USER_NAME.PLACEHOLDER}
              isError={!!fieldState.userName.errorMessage[0]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleUserNameChange(e.target.value)}
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - 유효 기간 */}
        {fieldState.cardCompany.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.CARD_EXPIRATION.MAIN_TEXT}
            subText={FORM_FIELDS.CARD_EXPIRATION.SUB_TEXT}
            label={FORM_FIELDS.CARD_EXPIRATION.LABEL}
            errorMessage={fieldState.cardExpiration.errorMessage}
          >
            {cardInfo.cardExpiration.map((_, index) => (
              <Input
                key={index}
                maxLength={FORM_FIELDS.CARD_EXPIRATION.MAX_LENGTH}
                placeholder={index === 0 ? FORM_FIELDS.CARD_EXPIRATION.PLACEHOLDER.MONTH : FORM_FIELDS.CARD_EXPIRATION.PLACEHOLDER.YEAR}
                isError={!!fieldState.cardExpiration.errorMessage[index]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCardExpirationChange(e.target.value, index)}
              ></Input>
            ))}
          </NewCardInputSection>
        )}

        {/* 입력 - 카드사 */}
        {fieldState.cardNumbers.isNextVisible && (
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
        )}

        {/* 입력 - 카드 번호 */}
        <NewCardInputSection
          mainText={FORM_FIELDS.CARD_NUMBERS.MAIN_TEXT}
          subText={FORM_FIELDS.CARD_NUMBERS.SUB_TEXT}
          label={FORM_FIELDS.CARD_NUMBERS.LABEL}
          errorMessage={fieldState.cardNumbers.errorMessage}
        >
          {cardInfo.cardNumbers.map((_, index) => (
            <Input
              key={index}
              maxLength={FORM_FIELDS.CARD_NUMBERS.MAX_LENGTH}
              placeholder={FORM_FIELDS.CARD_NUMBERS.PLACEHOLDER}
              isError={!!fieldState.cardNumbers.errorMessage[index]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCardNumbersChange(e.target.value, index)}
            ></Input>
          ))}
        </NewCardInputSection>
      </Styled.InputSection>
      {Object.values(fieldState).every((field) => field.isValid) && <Styled.Button onClick={() => navigate("/react-payments/confirmCardRegistration", { state: { cardFirstNumber: cardInfo.cardNumbers[0], cardCompany: cardInfo.cardCompany } })}>확인</Styled.Button>}
    </Styled.NewCardContainer>
  );
};

export default NewCardPage;
