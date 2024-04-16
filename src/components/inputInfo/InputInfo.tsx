import React from "react";

interface Props {
  mainText: string;
  subText: string;
}

const InputInfo = ({ mainText, subText }: Props) => {
  return (
    <>
      <h1>{mainText}</h1>
      <p>{subText}</p>
    </>
  );
};

export default InputInfo;
