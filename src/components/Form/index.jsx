import { useState } from "react";

import InputBox from "../InputBox";
import { ReactComponent as QuestionMark } from '../../assets/questionMark.svg';

import { Label, FormWrapper, HelpTextWrapper, InputHelperWrapper } from "./style";

function Form(props){
  const { label, background, border, error, inputInfo, size, onChange } = props;

  const [mouseHover, setMouseHover] = useState(false);

  const handleMouseHover = () => {
    setMouseHover((prev) => !prev);
  }

  return (
    <FormWrapper>
      <Label>
        <label>{label}</label>
        {props.countHelper && <div>{inputInfo[0].value?.length}/{props.countHelper}</div>}
      </Label>
      <InputHelperWrapper>
        <InputBox inputInfo={inputInfo} size={size} background={background} border={border} error={error} onChange={onChange}/>
        {props.questionHelper && <QuestionMark onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}/>}
        {mouseHover && <HelpTextWrapper>{props.helpText}</HelpTextWrapper>}
      </InputHelperWrapper>
    </FormWrapper>
  )
}

export default Form;