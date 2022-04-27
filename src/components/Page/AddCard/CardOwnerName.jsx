import React from "react";
import FieldSet from "../../FieldSet";
import styled from "styled-components";
import Input from "../../Input";

const CardOwnerName = ({ ownerName, onChangeOwnerName }) => {
  return (
    <Container>
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
            value={ownerName}
            onChange={onChangeOwnerName}
          />
        }
      </FieldSet>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 30px;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const MaxNumberIndicator = styled.span`
  font-size: 12px;
  position: absolute;
  top: 35px;
  right: 20px;
`;

export default CardOwnerName;
