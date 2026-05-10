import styled from "@emotion/styled";
import { useState } from "react";
import CardInfoSection from "../components/CardInfoSection";
import CardPreview from "../components/Card/CardPreview";
import CardNumberInputWrapper from "../components/InputWrapper/CardNumberInputWrapper";
import EXPInputWrapper from "../components/InputWrapper/EXPInputWrapper";
import CVCInputWrapper from "../components/InputWrapper/CVCInputWrapper";
import CardFirmSelect from "../components/CardFirmSelect/CardFirmSelect";
import PassWordInputWrapper from "../components/InputWrapper/PassWordInputWrapper";
import CheckBtn from "../components/button/CheckBtn";
import { useNavigate } from "react-router-dom";
import { getCardNumberErrorMessage } from "../utils/getCardNumberErrorMessage";
import { getEXPNumberErrorMessage } from "../utils/getEXPNumberErrorMessage";
import { getCVCNumberErrorMessage } from "../utils/getCVCNumberErrorMessage";
import { getPassWordErrorMessage } from "../utils/getPassWordErrorMessage";
import { getCardBrand } from "../utils/getCardBrand";

export default function CardRegisterPage() {
  const [cardNumbers, setCardNumbers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const cardBrand = getCardBrand(cardNumbers);

  const [EXPNumbers, setEXPNumbers] = useState({ mm: "", yy: "" });
  const [cvc, setCVC] = useState("");
  const [cardFirm, setCardFirm] = useState({ value: "", label: "" });
  const [passWord, setPassword] = useState("");

  const [isCardNumberCompleted, setIsCardNumberCompleted] = useState(false);
  const [isEXPCompleted, setIsEXPCompleted] = useState(false);
  const [isCVCCompleted, setIsCVCCompleted] = useState(false);

  const isAllValid =
    cardFirm.value !== "" &&
    getCardNumberErrorMessage(cardNumbers, cardBrand) === null &&
    getEXPNumberErrorMessage(EXPNumbers) === null &&
    getCVCNumberErrorMessage(cvc) === null &&
    getPassWordErrorMessage(passWord) === null;

  const navigate = useNavigate();

  return (
    <MainContainer>
      <CardPreview
        cardNumbers={cardNumbers}
        EXP={EXPNumbers}
        cardFirm={cardFirm}
        cardBrand={cardBrand}
      />

      <InputSectionContainer>
        {isCVCCompleted && (
          <CardInfoSection
            title="비밀번호를 입력해 주세요"
            caption="앞의 2자리를 입력해주세요"
            label="비밀번호 앞 2자리"
          >
            <PassWordInputWrapper setPassWord={setPassword} value={passWord} />
          </CardInfoSection>
        )}

        {isEXPCompleted && (
          <CardInfoSection title="CVC 번호를 입력해 주세요" label="CVC">
            <CVCInputWrapper
              setCVCNumber={setCVC}
              value={cvc}
              onComplete={(isCompleted) => {
                if (isCompleted) setIsCVCCompleted(true);
              }}
            />
          </CardInfoSection>
        )}

        {cardFirm.value && (
          <CardInfoSection
            title="카드 유효기간을 입력해 주세요"
            caption="월/년도(MMYY)를 순서대로 입력해 주세요"
            label="유효기간"
          >
            <EXPInputWrapper
              setEXPNumber={setEXPNumbers}
              value={EXPNumbers}
              onComplete={(isCompleted) => {
                if (isCompleted) setIsEXPCompleted(true);
              }}
            />
          </CardInfoSection>
        )}

        {isCardNumberCompleted && (
          <CardInfoSection
            title="카드사를 선택해 주세요"
            caption="현재 국내 카드사만 가능합니다."
          >
            <CardFirmSelect
              onChangeCardFirmCategory={(value, label) =>
                setCardFirm({ value, label })
              }
            />
          </CardInfoSection>
        )}

        <CardInfoSection
          title="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
          label="카드 번호"
        >
          <CardNumberInputWrapper
            setCardNumber={setCardNumbers}
            value={cardNumbers}
            onComplete={(isCompleted) => {
              if (isCompleted) setIsCardNumberCompleted(true);
            }}
            cardBrand={cardBrand}
          />
        </CardInfoSection>
      </InputSectionContainer>
      {isAllValid && (
        <CheckBtn
          onClick={() =>
            navigate("/complete", {
              state: {
                first: cardNumbers.first,
                cardFirmLabel: cardFirm.label,
              },
            })
          }
        />
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
