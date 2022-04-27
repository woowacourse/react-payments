import React from "react";
import styled from "styled-components";
import FieldSet from "../../FieldSet";
import Input from "../../Input";
import AskMark from "../../AskMark";

const SecureCode = ({ secureCode, onChangeSecureCode }) => {
  return (
    <FieldSet
      id="secureCode"
      description="보안코드(CVC/CVV)"
      errorMessage="유효한 보안코드를 입력해주세요"
    >
      {
        <SecureCodeInputContainer>
          <Input
            id="secureCode"
            size="medium"
            maxLength={3}
            value={secureCode}
            onChange={onChangeSecureCode}
          />
          <AskMark />
        </SecureCodeInputContainer>
      }
    </FieldSet>
  );
};

const SecureCodeInputContainer = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default SecureCode;
