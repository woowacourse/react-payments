import React, { ReactNode } from 'react';

interface CardInputContainerProps {
  title: string;
  subTitle: string;
  /**
   * 커스텀한  CardInput
   */
  children: ReactNode;
}

function CardInputContainer(props: CardInputContainerProps) {
  const { title, subTitle, children } = props;

  return (
    <section>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {children}
    </section>
  );
}

export default CardInputContainer;
