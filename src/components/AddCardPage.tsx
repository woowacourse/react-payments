import React from "react";
import styled from "styled-components";
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

const InputWrapperParent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const CvcWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CvcButtonWrapper = styled.div`
  margin-left: 11px;
`;
const NextButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

export default function AddCardPage({ cardNumberSet }: any) {
  return (
    <Page>
      <TitleWrapper>
        <PrevButton />
        <Title>카드 추가</Title>
      </TitleWrapper>
      <CardWrapper>
        <Card cardNumberSet={cardNumberSet} />
      </CardWrapper>
      <InputWrapperParent>
        <InputWrapper>
          <InputField kind="cardNumber">
            <CardNumberInput />
          </InputField>
          <InputField kind="expiracy">
            <ExpiracyInput />
          </InputField>
          <InputField kind="owner" inputLength="0/30">
            <OwnerInput />
          </InputField>
          <InputField kind="cvc">
            <CvcWrapper>
              <CvcInput />
              <CvcButtonWrapper>
                <InformationButton />
              </CvcButtonWrapper>
            </CvcWrapper>
          </InputField>
          <InputField kind="password">
            <PasswordInput />
          </InputField>
        </InputWrapper>
        <NextButtonWrapper>
          <NextButton />
        </NextButtonWrapper>
      </InputWrapperParent>
    </Page>
  );
}
