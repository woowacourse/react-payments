import { Meta, StoryObj } from '@storybook/react';
import { CardNumberInputs } from '../../components/Input/CardNumberInput/CardNumberInputs';
import React, { useState } from 'react';
import { GlobalStyle } from 'GlobalStyle';

const meta = {
  component: CardNumberInputs,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumberInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberInputsStory: Story = {
  args: {
    valueAndOnChanges: [
      { value: '1111', onChange: () => {} },
      { value: '2222', onChange: () => {} },
      { value: '3333', onChange: () => {} },
      { value: '4444', onChange: () => {} },
    ],
  },
  decorators: [
    (Story) => {
      const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
      const onChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setCardNumbers((prev) => {
          const prevNumbers = [...prev];
          prevNumbers.splice(index, 1, value);
          return prevNumbers;
        });
      };

      return (
        <>
          <GlobalStyle />
          <Story
            args={{
              valueAndOnChanges: [
                { value: cardNumbers[0], onChange: onChange(0) },
                { value: cardNumbers[1], onChange: onChange(1) },
                { value: cardNumbers[2], onChange: onChange(2) },
                { value: cardNumbers[3], onChange: onChange(3) },
              ],
            }}
          />
        </>
      );
    },
  ],
};
