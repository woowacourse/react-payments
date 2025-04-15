import React from 'react';

type propsType = {
    children: React.ReactNode;
    title: string;
    subTitle: string;
}

const InputContainer = ({children, title, subTitle}:propsType) => {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
      {children}
    </div>
  );
}

export default InputContainer;