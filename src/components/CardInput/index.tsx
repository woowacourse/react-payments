import React, { ReactNode, useId } from 'react';

interface CardInputProps {
  label: string;
  /**
   * input 요소들
   */
  children: ReactNode;
}

export default function CardInput(props: CardInputProps) {
  const { label, children } = props;
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div id={id}>{children}</div>
    </div>
  );
}
