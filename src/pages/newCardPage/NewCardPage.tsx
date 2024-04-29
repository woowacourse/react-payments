import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/default/input/Input";
import Dropdown from "../../components/default/dropdown/Dropdown";
import CardPreview from "../../components/newCardPage/cardPreview/CardPreview";
import NewCardInputSection from "../../components/newCardPage/newCardInputSection/NewCardInputSection";
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

  const { PasswordState, handlePasswordChange } = usePasswordInput();
  const { CvcState, handleCvcChange } = useCvcInput();
  const { UserNameState, handleUserNameChange, handleKeyDown, handleBlur } = useUserNameInput();
  const { CardExpirationState, handleCardExpirationChange } = useCardExpirationInput();
  const { CardCompanyState, handleCardCompanyChange } = useCardCompanyInput();
  const { CardNumbersState, handleCardNumbersChange } = useCardNumbersInput();

  const isFormValid = PasswordState.isValid && CvcState.isValid && UserNameState.isValid && CardExpirationState.isValid && CardCompanyState.isValid && CardNumbersState.isValid;

  const handleConfirmClick = () => {
    navigate("/react-payments/confirmCardRegistration", { state: { cardFirstNumber: CardNumbersState.value[0], cardCompany: CardCompanyState.value } });
  };

  return (
    <Styled.NewCardContainer>
      {/* 프리뷰 */}
      <CardPreview
        isCardFlipped={isCardFlipped}
        cvc={CvcState.value}
        userName={UserNameState.value}
        cardExpiration={CardExpirationState.value}
        cardCompany={CardCompanyState.value}
        cardNumbers={CardNumbersState.value}
      ></CardPreview>

      <Styled.InputSection>
        {/* 입력 - 비밀번호 */}
        {CvcState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.PASSWORD.MAIN_TEXT}
            subText={FORM_FIELDS.PASSWORD.SUB_TEXT}
            label={FORM_FIELDS.PASSWORD.LABEL}
            errorMessage={PasswordState.errorMessage}
          >
            <Input
              type="password"
              value={PasswordState.value}
              maxLength={FORM_FIELDS.PASSWORD.MAX_LENGTH}
              placeholder={FORM_FIELDS.PASSWORD.PLACEHOLDER}
              isError={!!PasswordState.errorMessage[0]}
              onChange={(e) => handlePasswordChange(e.target.value)}
              autoFocus
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - CVC */}
        {UserNameState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.CVC.MAIN_TEXT}
            subText={FORM_FIELDS.CVC.SUB_TEXT}
            label={FORM_FIELDS.CVC.LABEL}
            errorMessage={CvcState.errorMessage}
          >
            <Input
              value={CvcState.value}
              maxLength={FORM_FIELDS.CVC.MAX_LENGTH}
              placeholder={FORM_FIELDS.CVC.PLACEHOLDER}
              isError={!!CvcState.errorMessage[0]}
              onChange={(e) => handleCvcChange(e.target.value)}
              onFocus={() => setIsCardFlipped(!isCardFlipped)}
              onBlur={() => setIsCardFlipped(!isCardFlipped)}
              autoFocus
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - 소유자 이름 */}
        {CardExpirationState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.USER_NAME.MAIN_TEXT}
            subText={FORM_FIELDS.USER_NAME.SUB_TEXT}
            label={FORM_FIELDS.USER_NAME.LABEL}
            errorMessage={UserNameState.errorMessage}
          >
            <Input
              value={UserNameState.value}
              maxLength={FORM_FIELDS.USER_NAME.MAX_LENGTH}
              placeholder={FORM_FIELDS.USER_NAME.PLACEHOLDER}
              isError={!!UserNameState.errorMessage[0]}
              onChange={(e) => handleUserNameChange(e.target.value)}
              onKeyDown={handleKeyDown}
              onBlur={handleBlur}
              autoFocus
            ></Input>
          </NewCardInputSection>
        )}

        {/* 입력 - 유효 기간 */}
        {CardCompanyState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.CARD_EXPIRATION.MAIN_TEXT}
            subText={FORM_FIELDS.CARD_EXPIRATION.SUB_TEXT}
            label={FORM_FIELDS.CARD_EXPIRATION.LABEL}
            errorMessage={CardExpirationState.errorMessage}
          >
            {CardExpirationState.value.map((_, index) => (
              <Input
                key={index}
                value={CardExpirationState.value[index]}
                maxLength={FORM_FIELDS.CARD_EXPIRATION.MAX_LENGTH}
                placeholder={index === 0 ? FORM_FIELDS.CARD_EXPIRATION.PLACEHOLDER.MONTH : FORM_FIELDS.CARD_EXPIRATION.PLACEHOLDER.YEAR}
                isError={!!CardExpirationState.errorMessage[index]}
                onChange={(e) => handleCardExpirationChange(e, index)}
                autoFocus={index === 0}
              ></Input>
            ))}
          </NewCardInputSection>
        )}

        {/* 입력 - 카드사 */}
        {CardNumbersState.isNextVisible && (
          <NewCardInputSection
            mainText={FORM_FIELDS.CARD_COMPANY.MAIN_TEXT}
            subText={FORM_FIELDS.CARD_COMPANY.SUB_TEXT}
            label={FORM_FIELDS.CARD_COMPANY.LABEL}
            errorMessage={CardCompanyState.errorMessage}
          >
            <Dropdown
              selectList={FORM_FIELDS.CARD_COMPANY.OPTIONS}
              placeholder={FORM_FIELDS.CARD_COMPANY.PLACEHOLDER}
              onChange={(selectedValue: string) => handleCardCompanyChange(selectedValue)}
            />
          </NewCardInputSection>
        )}

        {/* 입력 - 카드 번호 */}
        <NewCardInputSection
          mainText={FORM_FIELDS.CARD_NUMBERS.MAIN_TEXT}
          subText={FORM_FIELDS.CARD_NUMBERS.SUB_TEXT}
          label={FORM_FIELDS.CARD_NUMBERS.LABEL}
          errorMessage={CardNumbersState.errorMessage}
        >
          {CardNumbersState.value.map((_, index) => (
            <Input
              key={index}
              value={CardNumbersState.value[index]}
              maxLength={FORM_FIELDS.CARD_NUMBERS.MAX_LENGTH}
              placeholder={FORM_FIELDS.CARD_NUMBERS.PLACEHOLDER}
              isError={!!CardNumbersState.errorMessage[index]}
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
