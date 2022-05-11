import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';

import { LABEL_PRIMARY_COLOR } from '../../../style';

import { QuestionContainer, TextArea } from './style';

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
