import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Header from "../Header";
import FieldSet from "../FieldSet";
import CardNumberInput from "../Input/CardNumberInput";
import Input from "../Input";
import AskMark from "../AskMark";
import DotMark from "../DotMark";
import Card from "../Card";
import ExpiredDateInput from "../Input/ExpiredDateInput";

const AddCardPage = () => {
  return (
    <Container>
      <Header title="카드 추가" />
      <Card
        cardName="호프"
        name="SALLY"
        expiredDate="03/23"
        cardNumber={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
      />
      <FieldSet
        id="cardNumber"
        description="카드 번호"
        errorMessage="유효한 카드 번호를 입력하세요."
      >
        {<CardNumberInput />}
      </FieldSet>
      <FieldSet
        id="expiredNumber"
        description="만료일"
        errorMessage="유효한 만료 숫자를 입력하세요"
      >
        {<ExpiredDateInput />}
      </FieldSet>

      <OwnerNameInputContainer>
        <MaxNumberIndicator>03/30</MaxNumberIndicator>
        <FieldSet
          id="cardOwnerName"
          description="카드 소유자 이름(선택)"
          errorMessage="이름은 30자 이하여야 합니다."
        >
          {
            <Input
              id="cardOwnerName"
              size="large"
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              maxLength="30"
            />
          }
        </FieldSet>
      </OwnerNameInputContainer>
      <FieldSet
        id="secureCode"
        description="보안코드(CVC/CVV)"
        errorMessage="유효한 보안코드를 입력해주세요"
      >
        {
          <SecureCodeInputContainer>
            <Input id="secureCode" size="medium" maxLength={3} />
            <AskMark />
          </SecureCodeInputContainer>
        }
      </FieldSet>
      <FieldSet
        id="password"
        description="카드 비밀번호"
        errorMessage="올바른 비밀번호를 입력해주세요."
      >
        {
          <PasswordInputContainer>
            <Input type="password" id="password" size="small" maxLength={1} />
            <Input type="password" id="password" size="small" maxLength={1} />
            <DotMark />
            <DotMark />
          </PasswordInputContainer>
        }
      </FieldSet>
      <Button></Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const MaxNumberIndicator = styled.span`
  font-size: 12px;
  position: absolute;
  top: 35px;
  right: 20px;
`;

const OwnerNameInputContainer = styled.div`
  padding-top: 30px;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const SecureCodeInputContainer = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const PasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default AddCardPage;
