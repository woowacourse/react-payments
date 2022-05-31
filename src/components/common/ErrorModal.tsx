import React, { useContext } from "react";
import styled from "styled-components";
import { ErrorContext } from "contexts";
import { TipButton } from ".";
import { COLORS } from "constants/color";
import { errorStateType } from "types";

export const ErrorModal = () => {
  const errorState: errorStateType = useContext(ErrorContext);

  return (
    <>
      <TipButton contents="!"></TipButton>
      <p>
        오류가 발생하였습니다.
        <br />
        잠시 후 다시 시도해주세요.
      </p>
      <ErrorMessage>{errorState.errorMessage}</ErrorMessage>
    </>
  );
};

const ErrorMessage = styled.p`
  color: ${COLORS.RED_100};
  font-weight: bold;
`;
