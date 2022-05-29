import styled from "styled-components";

interface IInputFieldProps {
  labelText: string;
  wrapperWidth: string;
  splitCount?: number;
  OptionalComponent?: JSX.Element;
  guideMessage: string;
  isComplete: boolean;
  horizontalAlign?: "center" | "space-around" | "flex-start";
  children: JSX.Element[] | JSX.Element;
}

interface IInputWrapperProps {
  inputChildren: JSX.Element[] | JSX.Element;
  wrapperWidth: string;
  horizontalAlign: "center" | "space-around" | "flex-start" | undefined;
  splitCount: number | undefined;
}

const StyledInputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  position: relative;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 14px;
  color: ${(props: { isComplete: boolean }) =>
    props.isComplete ? "#04c09e" : "#525252"};
  letter-spacing: -0.085em;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: ${(props: {
    width: string;
    align: "center" | "space-around" | "flex-start" | undefined;
  }) => props.align};
  background: #ecebf1;
  border-radius: 7px;
  width: ${(props: {
    width: string;
    align: "center" | "space-around" | "flex-start" | undefined;
  }) => props.width};
  padding: 12px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledGuideMessage = styled.span`
  margin-left: 4px;
  font-size: 11px;
  color: #f38181;
`;

function InputWrapper({
  inputChildren,
  wrapperWidth,
  horizontalAlign,
  splitCount,
}: IInputWrapperProps) {
  return (
    <>
      {splitCount ? (
        (inputChildren as JSX.Element[]).map((inputComponent, index) => (
          <StyledInputWrapper
            key={index}
            width={`calc(${wrapperWidth} / ${splitCount})`}
            align={horizontalAlign}
          >
            {inputComponent}
          </StyledInputWrapper>
        ))
      ) : (
        <StyledInputWrapper width={wrapperWidth} align={horizontalAlign}>
          {inputChildren}
        </StyledInputWrapper>
      )}
    </>
  );
}

export default function InputField({
  labelText,
  children,
  wrapperWidth,
  horizontalAlign,
  isComplete,
  guideMessage,
  OptionalComponent,
  splitCount,
}: IInputFieldProps) {
  return (
    <StyledInputField>
      <StyledLabel isComplete={isComplete}>
        {labelText}
        {!isComplete && (
          <StyledGuideMessage>{`(${guideMessage})`}</StyledGuideMessage>
        )}
      </StyledLabel>
      <StyledInputContainer>
        <InputWrapper
          inputChildren={children}
          wrapperWidth={wrapperWidth}
          horizontalAlign={horizontalAlign}
          splitCount={splitCount}
        />
        {OptionalComponent}
      </StyledInputContainer>
    </StyledInputField>
  );
}
