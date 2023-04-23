import React from "react";
import Style from "./InputGuideStyled";

type InputGuideProps = {
  warningText: string;
};
function InputGuide({ warningText }: InputGuideProps) {
  return (
    <>
      <Style.Guide>{warningText}</Style.Guide>
    </>
  );
}

export default InputGuide;
