import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import PrevButton from "../components/common/PrevButton";
import Card from "../components/card/Card";
import InputField from "../components/common/InputField";
import CardNumberInput from "../components/card/input/CardNumberInput";
import ExpiracyInput from "../components/card/input/ExpiracyInput";
import OwnerInput from "../components/card/input/OwnerInput";
import CvcInput from "../components/card/input/CvcInput";
import InformationButton from "../components/common/InformationButton";
import ToolTip from "../components/common/ToolTip";
import PasswordInput from "../components/card/input/PasswordInput";
import NextButton from "../components/common/NextButton";

interface AddCardPageProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
}

const Page = styled.div`
  position: relative;
  width: 375px;
  border: 1px solid;
  min-height: 100vh;
  padding: 20px 28px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #383838;
  margin-left: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputWrapperParent = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const CvcWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CvcButtonWrapper = styled.div`
  position: relative;
  margin-left: 11px;
`;
const NextButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

export default function AddCardPage({ onSubmit, onClick }: AddCardPageProps) {
  const firstCardNumber = useInput("", { name: "firstCardNumber" });
  const secondCardNumber = useInput("", { name: "secondCardNumber" });
  const thirdCardNumber = useInput("", { name: "thirdCardNumber" });
  const fourthCardNumber = useInput("", { name: "fourthCardNumber" });

  const monthValidate = (month: string) => {
    return Number(month) <= 12 && Number(month) >= 0;
  };

  const yearValidate = (year: string) => {
    return Number(year) >= 0;
  };

  const year = useInput("", {
    name: "year",
    validate: yearValidate,
    errorMessage: "카드의 연도를 확인해주세요",
  });
  const month = useInput("", {
    name: "month",
    validate: monthValidate,
    errorMessage: "카드의 달을 확인해주세요.",
  });

  const owner = useInput("", { name: "owner" });
  const cvc = useInput("", { name: "cvc" });

  const firstPassword = useInput("", { name: "firstPassword" });
  const secondPassword = useInput("", { name: "secondPassword" });

  const [isOpenToolTip, setIsOpenToolTip] = useState(false);

  const [isFormfilled, setIsFormfilled] = useState(true);

  const handleToolTip = () => {
    setIsOpenToolTip((prev) => !prev);
  };

  const cardForm = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!cardForm.current) return;
    setIsFormfilled(!cardForm.current.checkValidity());
  }, [
    firstCardNumber.value,
    secondCardNumber.value,
    thirdCardNumber.value,
    fourthCardNumber.value,
    year.value,
    month.value,
    cvc.value,
    firstPassword.value,
    secondPassword.value,
  ]);

  return (
    <Page>
      <TitleWrapper>
        <PrevButton onClick={onClick} />
        <Title>카드 추가</Title>
      </TitleWrapper>
      <CardWrapper>
        <Card
          cardNumberSet={[
            firstCardNumber.value,
            secondCardNumber.value,
            thirdCardNumber.value,
            fourthCardNumber.value,
          ]}
          expiracy={`${month.value ? month.value : "MM"}/${
            year.value ? year.value : "YY"
          }`}
          owner={owner.value}
        />
      </CardWrapper>
      <InputWrapperParent onSubmit={onSubmit} ref={cardForm}>
        <InputWrapper>
          <InputField kind="cardNumber">
            <CardNumberInput
              firstNumber={firstCardNumber}
              secondNumber={secondCardNumber}
              thirdNumber={thirdCardNumber}
              fourthNumber={fourthCardNumber}
            />
          </InputField>
          <InputField kind="expiracy">
            <ExpiracyInput year={year} month={month} />
          </InputField>
          <InputField kind="owner" inputLength={`${owner.value.length}/30`}>
            <OwnerInput owner={owner} />
          </InputField>
          <InputField kind="cvc">
            <CvcWrapper>
              <CvcInput cvc={cvc} />
              <CvcButtonWrapper>
                <InformationButton onClick={handleToolTip} />
                {isOpenToolTip && (
                  <ToolTip
                    text={
                      "CVC번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다"
                    }
                  />
                )}
              </CvcButtonWrapper>
            </CvcWrapper>
          </InputField>
          <InputField kind="password">
            <PasswordInput
              firstPassword={firstPassword}
              secondPassword={secondPassword}
            />
          </InputField>
        </InputWrapper>
        <NextButtonWrapper>
          <NextButton isDisable={isFormfilled} />
        </NextButtonWrapper>
      </InputWrapperParent>
    </Page>
  );
}
