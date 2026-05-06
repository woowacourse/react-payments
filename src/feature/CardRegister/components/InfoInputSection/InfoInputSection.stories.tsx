import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import InfoInputSection from './InfoInputSection';

const meta = {
  title: 'feature/CardRegister/components/InfoInputSection',
  component: InfoInputSection,
  tags: ['autodocs'],
  args: {
    cardPreviewInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
    },
    cardFormHandlers: {
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
    cardPreviewInfo: {
      cardNumbers: ['4123', '56', '', ''],
      expiryMonth: '1',
      expiryYear: '',
    },
  },
};

export const Filled: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['4123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
    },
  },
};

export const Interactive: Story = {
  render: function InteractiveInfoInputSection(args) {
    const [cardNumbers, setCardNumbers] = useState(args.cardPreviewInfo.cardNumbers);
    const [expiryMonth, setExpiryMonth] = useState(args.cardPreviewInfo.expiryMonth);
    const [expiryYear, setExpiryYear] = useState(args.cardPreviewInfo.expiryYear);

    return (
      <InfoInputSection
        {...args}
        cardPreviewInfo={{cardNumbers, expiryMonth, expiryYear}}
        cardFormHandlers={{setCardNumbers, setExpiryMonth, setExpiryYear}}
      />
    );
  },
};
