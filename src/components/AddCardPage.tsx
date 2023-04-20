import React, { FormEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import Card from "./Card";
import CardNumberInput from "./CardNumberInput";
import CvcInput from "./CvcInput";
import ExpiracyInput from "./ExpiracyInput";
import InformationButton from "./InformationButton";
import InputField from "./InputField";
import NextButton from "./NextButton";
import OwnerInput from "./OwnerInput";
import PasswordInput from "./PasswordInput";
import PrevButton from "./PrevButton";
import ToolTip from "./ToolTip";

interface AddCardPageProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
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

export default function AddCardPage({ onSubmit }: AddCardPageProps) {
  const firstCardNumber = useInput("", "firstCardNumber");
  const secondCardNumber = useInput("", "secondCardNumber");
  const thirdCardNumber = useInput("", "thirdCardNumber");
  const fourthCardNumber = useInput("", "fourthCardNumber");

  const year = useInput("", "year");
  const month = useInput("", "month");

  const owner = useInput("", "owner");
  const cvc = useInput("", "cvc");

  const firstPassword = useInput("", "firstPassword");
  const secondPassword = useInput("", "secondPassword");

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
        <PrevButton />
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
          <InputField kind="owner" inputLength={`${0}/30`}>
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
