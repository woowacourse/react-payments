import styled from "@emotion/styled";
import { useState } from "react";
import CardInfoSection from "./components/CardInfoSection";
import CardPreview from "./components/Card/CardPreview";
import CardNumberInputWrapper from "./components/InputWrapper/CardNumberInputWrapper";
import EXPInputWrapper from "./components/InputWrapper/EXPInputWrapper";
import CVCInputWrapper from "./components/InputWrapper/CVCInputWrapper";

function App() {
  const [cardNumbers, setCardNumbers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [EXPNumbers, setEXPNumbers] = useState({ mm: "", yy: "" });

  const [cvc, setCVC] = useState("");

  return (
    <MainContainer>
      <CardPreview cardNumbers={cardNumbers} EXP={EXPNumbers} />
      <InputSectionContainer>
        <CardInfoSection
          title="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
          inputLabel="카드 번호"
        >
          <CardNumberInputWrapper
            setCardNumber={setCardNumbers}
            value={cardNumbers}
          />
        </CardInfoSection>

        <CardInfoSection
          title="카드 유효기간을 입력해 주세요"
          caption="월/년도(MMYY)를 순서대로 입력해 주세요"
          inputLabel="유효기간"
        >
          <EXPInputWrapper setEXPNumber={setEXPNumbers} value={EXPNumbers} />
        </CardInfoSection>

        <CardInfoSection title="CVC 번호를 입력해 주세요" inputLabel="CVC">
          <CVCInputWrapper setCVCNumber={setCVC} value={cvc} />
        </CardInfoSection>
      </InputSectionContainer>
    </MainContainer>
  );
}

export default App;

const InputSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainContainer = styled.main`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
