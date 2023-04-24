import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Question } from '../assets/question.svg';

function QuestionToolTip({ questionMessage }: { questionMessage: string }) {
  const [show, setShow] = useState(false);

  const showMessage = () => setShow(true);
  const hideMessage = () => setShow(false);

  return (
    <StyledQuestionToolTip onMouseEnter={showMessage} onMouseLeave={hideMessage}>
      <Question />
      {show && <p>{questionMessage}</p>}
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
