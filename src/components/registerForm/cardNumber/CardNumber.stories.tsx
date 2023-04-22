import { Meta } from '@storybook/react';
import React, { useRef } from 'react';
import { CardNumber } from './CardNumber';

const cardNumber = {
  component: CardNumber,
  title: 'Card Number Input',
} satisfies Meta<typeof CardNumber>;

export default cardNumber;

export const Example = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const registerCard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    divRef.current?.childNodes.forEach((elem) => {
      if (elem instanceof HTMLInputElement) {
        console.log(elem.value);
      }
    });
  };

  return (
    <form onSubmit={registerCard}>
      <CardNumber ref={divRef} />
      <button>다음</button>
    </form>
  );
};
