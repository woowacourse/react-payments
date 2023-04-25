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
      {isShow && <p>{questionMessage}</p>}
    </StyledQuestionToolTip>
  );
}

const StyledQuestionToolTip = styled.div`
  position: relative;
  display: flex;

  & > svg {
    min-width: 27px;
    min-height: 27px;
    margin: 10px;
  }
  & > p {
    position: absolute;
    font-size: 8px;
    left: 42px;
    top: 4px;
    width: 180px;
  }
`;
export default QuestionToolTip;
