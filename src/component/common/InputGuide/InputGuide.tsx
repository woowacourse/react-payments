import React from "react";
import Style from "./InputGuideStyled";

interface InputGuideProps {
  warningText: string;
}
function InputGuide({ warningText }: InputGuideProps) {
  return (
    <>
      <Style.Guide>{warningText}</Style.Guide>
    </>
  );
}

export default InputGuide;
