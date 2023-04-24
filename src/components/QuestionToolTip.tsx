import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Question } from '../assets/question.svg';

const QuestionToolTipStyler = styled.div`
  position: relative;
  display: flex;

  & > svg {
    min-width: 27px;
    min-height: 27px;
    margin: 10px;
    cursor: pointer;
  }
  & > p {
    position: absolute;
    font-size: 10px;
    left: 42px;
    width: 180px;
  }
`;

function QuestionToolTip({ questionMessage }: { questionMessage: string }) {
  const [show, setShow] = useState(false);

  const showMessage = () => setShow(true);
  const hideMessage = () => setShow(false);

  return (
    <QuestionToolTipStyler onMouseEnter={showMessage} onMouseLeave={hideMessage}>
      <Question />
      {show && <p>{questionMessage}</p>}
    </QuestionToolTipStyler>
  );
}

export default QuestionToolTip;
