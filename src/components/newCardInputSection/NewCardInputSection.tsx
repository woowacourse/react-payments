import React, { ReactNode } from "react";

interface Props {
  mainText: string;
  subText?: string;
  errorMessage: string;
  children: ReactNode;
}

const NewCardInputSection = ({ mainText, subText, errorMessage, children }: Props) => {
  return (
    <>
      <div>
        <h1>{mainText}</h1>
        {subText && <p>{subText}</p>}
      </div>
      <form>{children}</form>
      {errorMessage && <span>{errorMessage}</span>}
    </>
  );
};

export default NewCardInputSection;
