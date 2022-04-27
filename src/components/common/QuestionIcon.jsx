import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  position: relative;
`;

const TextArea = styled.p`
  display: ${props => (props.isShown ? 'block' : 'none')};
  position: absolute;
  top: -40px;
  left: 10px;
  background-color: #f0f;

  ${QuestionContainer}:hover & {
    display: block;
  }
`;

function QuestionIcon({ textContent }) {
  const [isShown, setIsShown] = useState();

  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  return (
    <QuestionContainer onClick={handleClickBox}>
      <TextArea isShown={isShown}>{textContent}</TextArea>
      <BsQuestionCircle />
    </QuestionContainer>
  );
}

export default QuestionIcon;
