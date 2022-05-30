import React, { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";

import { LABEL_PRIMARY_COLOR } from "style";

import { QuestionContainer, TextArea } from "./styled";

interface QuestionIconProps {
  children: React.ReactNode;
}

function QuestionIcon({ children: textContent }: QuestionIconProps) {
  const [isShown, setIsShown] = useState(false);

  const handleClickBox = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <QuestionContainer onClick={handleClickBox}>
      <TextArea isShown={isShown}>{textContent}</TextArea>
      <BsQuestionCircle size={30} color={LABEL_PRIMARY_COLOR} />
    </QuestionContainer>
  );
}

export default QuestionIcon;
