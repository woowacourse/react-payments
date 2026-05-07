import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import InfoInputSection from './InfoInputSection';

const meta = {
  title: 'feature/CardRegister/components/InfoInputSection',
  component: InfoInputSection,
  tags: ['autodocs'],
  args: {
    cardInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
    },
    cardInfoHandlers: {
      setCardNumbers: fn(),
      setExpiryMonth: fn(),
      setExpiryYear: fn(),
    },
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['4123', '56', '', ''],
      expiryMonth: '1',
      expiryYear: '',
    },
  },
};

export const Filled: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['4123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
    },
  },
};

export const Interactive: Story = {
  render: function InteractiveInfoInputSection(args) {
    const [cardNumbers, setCardNumbers] = useState(args.cardInfo.cardNumbers);
    const [expiryMonth, setExpiryMonth] = useState(args.cardInfo.expiryMonth);
    const [expiryYear, setExpiryYear] = useState(args.cardInfo.expiryYear);

    return (
      <InfoInputSection
        {...args}
        cardInfo={{cardNumbers, expiryMonth, expiryYear}}
        cardInfoHandlers={{setCardNumbers, setExpiryMonth, setExpiryYear}}
      />
    );
  },
};
