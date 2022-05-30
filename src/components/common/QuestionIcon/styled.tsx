import styled from "styled-components";
import { BUBBLE_PRIMARY_BG_COLOR, BUBBLE_PRIMARY_COLOR } from "style";

interface TextAreaProps {
  isShown: boolean;
}

const QuestionContainer = styled.div`
  position: relative;
`;

const TextArea = styled.p<TextAreaProps>`
  display: ${(props) => (props.isShown ? "block" : "none")};
  position: absolute;
  min-width: 200px;
  bottom: 10px;
  left: 40px;
  padding: 4px 4px 4px 16px;
  text-align: left;
  background-color: ${BUBBLE_PRIMARY_BG_COLOR};
  color: ${BUBBLE_PRIMARY_COLOR};
  border-radius: 5px;
  border: 1px solid ${BUBBLE_PRIMARY_COLOR};

  ${QuestionContainer}:hover & {
    display: block;
  }
`;

export { QuestionContainer, TextArea };
