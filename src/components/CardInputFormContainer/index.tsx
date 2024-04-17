import React, { ReactNode } from 'react';

interface CardInputFormContainerProps {
  title: string;
  subTitle: string;
  /**
   * 커스텀한 CardInputForm
   */
  children: ReactNode;
}

function CardInputFormContainer(props: CardInputFormContainerProps) {
  const { title, subTitle, children } = props;

  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {children}
    </>
  );
}

export default CardInputFormContainer;
