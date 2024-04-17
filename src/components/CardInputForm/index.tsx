import React, { ReactNode, useId } from 'react';

interface CardInputFormProps {
  label: string;
  /**
   * input 요소들
   */
  children: ReactNode;
}

function CardInputForm(props: CardInputFormProps) {
  const { label, children } = props;
  const id = useId();

  return (
    <form>
      <label htmlFor={id}>{label}</label>
      <div id={id}>{children}</div>
    </form>
  );
}

export default CardInputForm;
