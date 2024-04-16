import { ChangeEventHandler, SetStateAction, useState, Dispatch } from "react";

interface Props {
  placeholder: string;
  validate: (text: string) => void;
  setText: Dispatch<SetStateAction<string>>;
}

const Input = ({ placeholder, setText, validate }: Props) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const text = e.target.value;
    validate(text); // 커스텀훅
    // setText(e.target.value);
  };

  return <input onChange={onChange} placeholder={placeholder}></input>;
};

export default Input;

// 부모 {

//   <Input {validate:{(e:event)=>{
//     preventDefault();
//     setText(e.target.value);
//     setCardType()
//   }}) ></Input>
// }
