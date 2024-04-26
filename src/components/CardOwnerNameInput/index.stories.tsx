import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react'; // 경로는 실제 파일 구조에 맞게 조정해야 함
import CardOwnerNameInput from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'CardOwnerNameInput',
  component: CardOwnerNameInput,

  parameters: {
    layout: 'centered',
  },

  decorators: [
    (Story) => {
      const [cardOwnerName, setCardOwnerName] = useState('');
      const [cardOwnerNameError, setCardOwnerNameError] = useState(false);

      const handleCardOwnerNameChange = (value: string) => {
        if (/^[a-zA-Z ]*$/.test(value)) {
          setCardOwnerNameError(false);
          setCardOwnerName(value);
        } else {
          setCardOwnerNameError(true);
        }
      };

      const handlePressEnter = (value: string) => {
        if (!cardOwnerNameError) {
          alert(`Valid name: ${value}`);
        }
      };

      return (
        <Story
          cardOwnerName={cardOwnerName}
          cardOwnerNameError={cardOwnerNameError}
          onCardOwnerNameChange={handleCardOwnerNameChange}
          onPressEnter={handlePressEnter}
        />
      );
    },
  ],

  tags: ['autodocs'],

  args: {
    onCardOwnerNameChange: fn(),
    onPressEnter: fn(),
  },
} satisfies Meta<typeof CardOwnerNameInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardOwnerName: '',
    cardOwnerNameError: false,
  },
};

export const WithError: Story = {
  args: {
    cardOwnerName: '1234',
    cardOwnerNameError: true,
  },
};
