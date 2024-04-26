import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/default/input/Input";
import Dropdown from "../../components/default/dropdown/Dropdown";
import CardPreview from "../../components/newCardPage/cardPreview/CardPreview";
import NewCardInputSection from "../../components/newCardPage/newCardInputSection/NewCardInputSection";
import { CardCompany } from "../../types/type";
import { FORM_FIELDS } from "../../constants/setting";
import * as Styled from "./NewCardPage.styled";
import usePasswordInput from "../../hooks/usePasswordInput";
import useCvcInput from "../../hooks/useCvcInput";
import useUserNameInput from "../../hooks/useUserNameInput";
import useCardExpirationInput from "../../hooks/useCardExpirationInput";
import useCardCompanyInput from "../../hooks/useCardCompanyInput";
import useCardNumbersInput from "../../hooks/useCardNumbersInput";

const NewCardPage = () => {
  const navigate = useNavigate();
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const [passwordState, handlePasswordChange] = usePasswordInput();
  const [cvcState, handleCvcChange] = useCvcInput();
  const [userNameState, handleUserNameChange, handleKeyDown] = useUserNameInput();
  const [cardExpirationState, handleCardExpirationChange] = useCardExpirationInput();
  const [cardCompanyState, handleCardCompanyChange] = useCardCompanyInput();
  const [cardNumbersState, handleCardNumbersChange] = useCardNumbersInput();

  const isFormValid = passwordState.isValid && cvcState.isValid && userNameState.isValid && cardExpirationState.isValid && cardCompanyState.isValid && cardNumbersState.isValid;

  const handleConfirmClick = () => {
    navigate("/react-payments/confirmCardRegistration", { state: { cardFirstNumber: cardNumbersState.value[0], cardCompany: cardCompanyState.value } });
  };

  return (
    <Styled.NewCardContainer>
      {/* 프리뷰 */}
      <CardPreview
        isCardFlipped={isCardFlipped}
        cvc={cvcState.value}
        userName={userNameState.value}
        cardExpiration={cardExpirationState.value}
        cardCompany={cardCompanyState.value}
        cardNumbers={cardNumbersState.value}
      ></CardPreview>

      <Styled.InputSection>
        {/* 입력 - 비밀번호 */}
        {cvcState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.PASSWORD.MAIN_TEXT}
            subText={FORM_FIELDS.PASSWORD.SUB_TEXT}
            label={FORM_FIELDS.PASSWORD.LABEL}
            errorMessage={passwordState.errorMessage}
          >
            <Input
              type="password"
              maxLength={FORM_FIELDS.PASSWORD.MAX_LENGTH}
              placeholder={FORM_FIELDS.PASSWORD.PLACEHOLDER}
              isError={!!passwordState.errorMessage[0]}
              onChange={(e) => handlePasswordChange(e.target.value)}
              autoFocus
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - CVC */}
        {userNameState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.CVC.MAIN_TEXT}
            subText={FORM_FIELDS.CVC.SUB_TEXT}
            label={FORM_FIELDS.CVC.LABEL}
            errorMessage={cvcState.errorMessage}
          >
            <Input
              maxLength={FORM_FIELDS.CVC.MAX_LENGTH}
              placeholder={FORM_FIELDS.CVC.PLACEHOLDER}
              isError={!!cvcState.errorMessage[0]}
              onChange={(e) => handleCvcChange(e.target.value)}
              onFocus={() => setIsCardFlipped(!isCardFlipped)}
              onBlur={() => setIsCardFlipped(!isCardFlipped)}
              autoFocus
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - 소유자 이름 */}
        {cardExpirationState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.USER_NAME.MAIN_TEXT}
            subText={FORM_FIELDS.USER_NAME.SUB_TEXT}
            label={FORM_FIELDS.USER_NAME.LABEL}
            errorMessage={userNameState.errorMessage}
          >
            <Input
              value={userNameState.value}
              maxLength={FORM_FIELDS.USER_NAME.MAX_LENGTH}
              placeholder={FORM_FIELDS.USER_NAME.PLACEHOLDER}
              isError={!!userNameState.errorMessage[0]}
              onChange={(e) => handleUserNameChange(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - 유효 기간 */}
        {cardCompanyState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.CARD_EXPIRATION.MAIN_TEXT}
            subText={FORM_FIELDS.CARD_EXPIRATION.SUB_TEXT}
            label={FORM_FIELDS.CARD_EXPIRATION.LABEL}
            errorMessage={cardExpirationState.errorMessage}
          >
            {cardExpirationState.value.map((_, index) => (
              <Input
                key={index}
                maxLength={FORM_FIELDS.CARD_EXPIRATION.MAX_LENGTH}
                placeholder={index === 0 ? FORM_FIELDS.CARD_EXPIRATION.PLACEHOLDER.MONTH : FORM_FIELDS.CARD_EXPIRATION.PLACEHOLDER.YEAR}
                isError={!!cardExpirationState.errorMessage[index]}
                onChange={(e) => handleCardExpirationChange(e, index)}
                autoFocus={index === 0}
              ></Input>
            ))}
          </NewCardInputSection>
        )}

        {/* 입력 - 카드사 */}
        {cardNumbersState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.CARD_COMPANY.MAIN_TEXT}
            subText={FORM_FIELDS.CARD_COMPANY.SUB_TEXT}
            label={FORM_FIELDS.CARD_COMPANY.LABEL}
            errorMessage={cardCompanyState.errorMessage}
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
          errorMessage={cardNumbersState.errorMessage}
        >
          {cardNumbersState.value.map((_, index) => (
            <Input
              key={index}
              maxLength={FORM_FIELDS.CARD_NUMBERS.MAX_LENGTH}
              placeholder={FORM_FIELDS.CARD_NUMBERS.PLACEHOLDER}
              isError={!!cardNumbersState.errorMessage[index]}
              onChange={(e) => handleCardNumbersChange(e, index)}
              autoFocus={index === 0}
            ></Input>
          ))}
        </NewCardInputSection>
      </Styled.InputSection>
      {isFormValid && <Styled.Button onClick={handleConfirmClick}>확인</Styled.Button>}
    </Styled.NewCardContainer>
  );
};

export default NewCardPage;
