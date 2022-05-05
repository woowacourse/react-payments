import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { BUBBLE_PRIMARY_BG_COLOR, BUBBLE_PRIMARY_COLOR, LABEL_PRIMARY_COLOR } from '../../style';

const QuestionContainer = styled.div`
  position: relative;
`;

const TextArea = styled.p`
  display: ${props => (props.isShown ? 'block' : 'none')};
  position: absolute;
  min-width: 200px;
  bottom: 10px;
  left: 40px;
  padding: 4px 4px 4px 16px;
  text-align: left;
  background-color: ${BUBBLE_PRIMARY_BG_COLOR};
  color: ${BUBBLE_PRIMARY_COLOR};
  border-radius: 5%;

  ${QuestionContainer}:hover & {
    display: block;
  }
`;

function QuestionIcon({ children: textContent }) {
  const [isShown, setIsShown] = useState();

  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  return (
    <QuestionContainer onClick={handleClickBox}>
      <TextArea isShown={isShown}>{textContent}</TextArea>
      <BsQuestionCircle size={30} color={LABEL_PRIMARY_COLOR} />
    </QuestionContainer>
  );
}

export default QuestionIcon;
