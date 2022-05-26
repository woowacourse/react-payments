import React from "react";
import styled, { css } from "styled-components";

import { textColor } from "components/UIComponents/styleConstants";

const widthPreset = {
  xs: "45px",
  sm: "85px",
  md: "135px",
  xl: "80%",
  full: "100%",
};

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  position: relative;
`;

const StyledLabel = styled.label<{ state: "default" | "error" | "complete" }>`
  font-size: 12px;
  line-height: 14px;
  color: ${({ state }) => textColor[state]};
  letter-spacing: -0.085em;

  display: flex;
  gap: 10px;
`;

const StyledInputWrapper = styled.div<
  Pick<Props, "isSplit" | "shape" | "isInvalid"> & {
    width: string;
    align: string;
  }
>`
  ${({ isSplit, shape, isInvalid, width, align }) => css`
    display: flex;
    justify-content: ${align};
    border-bottom: ${shape === "underline" && "1px solid #000000"};

    margin: ${width === "xl" && "auto"};
    gap: ${isSplit && "10px"};

    ${isSplit && "input {"}
    background: ${shape === "box" && "#ecebf1"};
    border-radius: ${shape === "box" && "7px"};
    width: ${widthPreset[width]};
    padding: 12px;

    box-shadow: ${isInvalid && "inset 0 0 0 1px #d82424"};
    ${isSplit && "}"}
  `}
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

type Props = {
  labelText?: string;
  children: React.ReactNode;
  OptionalComponent?: React.ReactNode;
  wrapperWidth: "xs" | "sm" | "md" | "xl" | "full";
  horizontalAlign?: "flex-start" | "center" | "space-around";
  isComplete?: boolean;
  isInvalid?: boolean;
  shape?: "box" | "underline";
  isSplit?: boolean;
};

export default function InputField({
  labelText,
  children,
  OptionalComponent,
  wrapperWidth,
  horizontalAlign = "flex-start",
  isComplete,
  isInvalid,
  shape = "box",
  isSplit,
}: Props) {
  return (
    <StyledInputField>
      <StyledLabel
        state={isInvalid ? "error" : isComplete ? "complete" : "default"}
      >
        {labelText}
      </StyledLabel>
      <StyledInputContainer>
        <StyledInputWrapper
          width={wrapperWidth}
          align={horizontalAlign}
          isInvalid={isInvalid}
          shape={shape}
          isSplit={isSplit}
        >
          {children}
        </StyledInputWrapper>
        {OptionalComponent}
      </StyledInputContainer>
    </StyledInputField>
  );
}
