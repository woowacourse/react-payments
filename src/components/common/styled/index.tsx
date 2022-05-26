import styled from "styled-components";
import { INPUT_PRIMARY_BG_COLOR, LABEL_PRIMARY_COLOR } from "style";

interface InputContainerProps {
  readonly position: string;
  readonly width: string;
}

interface InputWrapperProps {
  readonly color: string;
  readonly width: string;
}

interface SpanProps {
  readonly padding?: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const InputContainer = styled.div<InputContainerProps>`
  position: ${(props) => props.position || "static"};
  width: ${(props) => props.width || "100%"};
  margin: 16px 0;
`;

const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: ${(props) => props.width || "100%"};
  margin-top: 0.375rem;
  padding: 8px;
  color: ${(props) => props.color};
  border-radius: 0.25rem;
  background-color: ${INPUT_PRIMARY_BG_COLOR};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: ${LABEL_PRIMARY_COLOR};
`;

const Span = styled.span<SpanProps>`
  padding: ${(props) => props.padding || "0"};
`;

export { Form, InputContainer, InputWrapper, Label, Span };
