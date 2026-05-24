import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import CardInfoSection from "../components/CardInfoSection";
import CardPreview from "../components/Card/CardPreview";
import CardNumberField from "../components/InputField/CardNumberField";
import ExpNumberField from "../components/InputField/ExpNumberField";
import CvcNumberField from "../components/InputField/CvcNumberField";
import CardFirmSelect from "../components/CardFirmSelect/CardFirmSelect";
import PasswordNumberField from "../components/InputField/PasswordNumberField";
import CheckBtn from "../components/button/CheckBtn";

import useCardNumberField from "../hooks/useCardNumberField";
import useCardFirmField from "../hooks/useCardFirmField";
import useExpNumberField from "../hooks/useExpNumberField";
import useCvcNumberField from "../hooks/useCvcNumberField";
import usePasswordNumberField from "../hooks/usePasswordNumberField";
import useCardSubmit from "../hooks/useCardSubmit";

export default function CardRegisterPage() {
  const {
    cardNumbers,
    isCardNumberCompleted,
    cardBrand,
    onCardNumberChange,
    onCardNumberComplete,
    isCardNumberValid,
  } = useCardNumberField();

  const {
    expNumbers,
    isExpNumberCompleted,
    onExpNumberChange,
    onExpNumberComplete,
    isExpNumberValid,
  } = useExpNumberField();

  const {
    cvcNumbers,
    isCvcNumberCompleted,
    onCvcNumberChange,
    onCvcNumberComplete,
    isCvcNumberValid,
  } = useCvcNumberField();

  const { cardFirm, onCardFirmChange, isCardFirmValid } = useCardFirmField();

  const { passwordNumbers, onPasswordNumberChange, isPasswordNumberValid } =
    usePasswordNumberField();

  const isAllValid =
    isCardNumberValid &&
    isCardFirmValid &&
    isExpNumberValid &&
    isCvcNumberValid &&
    isPasswordNumberValid;
  const navigate = useNavigate();

  const { handleComplete, serverError, isSubmitting } = useCardSubmit({
    cardNumbers,
    expNumbers,
    cvcNumbers,
    cardFirm,
    onSuccess: () => navigate("/cards"),
  });

  return (
    <MainContainer>
      <CardPreview
        cardNumbers={cardNumbers}
        EXP={expNumbers}
        cardFirm={cardFirm}
        cardBrand={cardBrand}
      />

      <InputSectionContainer>
        {isCvcNumberCompleted && (
          <CardInfoSection
            title="비밀번호를 입력해 주세요"
            caption="앞의 2자리를 입력해주세요"
            label="비밀번호 앞 2자리"
          >
            <PasswordNumberField
              onChange={onPasswordNumberChange}
              value={passwordNumbers}
            />
          </CardInfoSection>
        )}

        {isExpNumberCompleted && (
          <CardInfoSection title="CVC 번호를 입력해 주세요" label="CVC">
            <CvcNumberField
              onChange={onCvcNumberChange}
              value={cvcNumbers}
              onComplete={onCvcNumberComplete}
              errorMessage={
                serverError?.code === "INVALID_CVC" ? serverError.message : null
              }
            />
          </CardInfoSection>
        )}

        {cardFirm.value && (
          <CardInfoSection
            title="카드 유효기간을 입력해 주세요"
            caption="월/년도(MMYY)를 순서대로 입력해 주세요"
            label="유효기간"
          >
            <ExpNumberField
              onChange={onExpNumberChange}
              value={expNumbers}
              onComplete={onExpNumberComplete}
              errorMessage={
                serverError?.code === "INVALID_EXPIRATION_DATE"
                  ? serverError.message
                  : null
              }
            />
          </CardInfoSection>
        )}

        {isCardNumberCompleted && (
          <CardInfoSection
            title="카드사를 선택해 주세요"
            caption="현재 국내 카드사만 가능합니다."
          >
            <CardFirmSelect onChange={onCardFirmChange} />
          </CardInfoSection>
        )}

        <CardInfoSection
          title="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
          label="카드 번호"
        >
          <CardNumberField
            onChange={onCardNumberChange}
            value={cardNumbers}
            onComplete={onCardNumberComplete}
            cardBrand={cardBrand}
            errorMessage={
              serverError?.code === "INVALID_CARD_NUMBER"
                ? serverError.message
                : null
            }
          />
        </CardInfoSection>
      </InputSectionContainer>
      {isAllValid && (
        <CheckBtn onClick={handleComplete} disabled={isSubmitting} />
      )}
    </MainContainer>
  );
}
const InputSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
  width: 100%;
`;

const MainContainer = styled.main`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 45px;
  padding: 40px 20px 20px;
  width: 376px;
  height: 700px;
  overflow: hidden;
  box-sizing: border-box;
  border: 0.5px solid #e0e0e0;
`;
