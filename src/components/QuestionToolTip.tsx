import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Question } from '../assets/question.svg';

interface QuestionToolTipProps {
  questionMessage: string;
}

function QuestionToolTip({ questionMessage }: QuestionToolTipProps) {
  const [isShow, setIsShow] = useState(false);

  const showMessage = () => setIsShow(true);
  const hideMessage = () => setIsShow(false);

  return (
    <StyledQuestionToolTip onMouseEnter={showMessage} onMouseLeave={hideMessage}>
      <Question />
      {isShow && <StyledMessage>{questionMessage}</StyledMessage>}
    </StyledQuestionToolTip>
  );
}

const StyledQuestionToolTip = styled.div`
  position: relative;
  display: flex;

  & > svg {
    min-width: 27px;
    min-height: 27px;
  }
`;

const StyledMessage = styled.p`
  position: absolute;
  font-size: 12px;
  line-height: 1.2;
  left: 42px;
  width: 180px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export default QuestionToolTip;
