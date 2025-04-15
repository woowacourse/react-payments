import { INPUT_TYPE } from "../../constants/constants";
import Description from "../Description/Description";
import InputGroup from "../InputGroup/InputGroup";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";

export interface InputFormProps {
  title: string;
  description: string;
  subTitle: string;
  type: keyof typeof INPUT_TYPE;
}

function InputForm({
  title,
  description = "",
  subTitle,
  type,
}: InputFormProps) {
  return (
    <>
      <Title title={title}></Title>
      <Description description={description}></Description>
      <Subtitle subtitle={subTitle}></Subtitle>
      <InputGroup type={type}></InputGroup>
    </>
  );
}

export default InputForm;
