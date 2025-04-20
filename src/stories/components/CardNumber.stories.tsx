import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'storybook/internal/preview-api';
import CardNumber from '../../components/CardNumber/CardNumber';

export const ActionsData = {
  setCardNumber: fn(),
  setCardNumberErrorMessage: fn(),
};

const meta = {
  title: 'CardNumber',
  component: CardNumber,
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  argTypes: {
    cardNumber: { control: false },
    cardNumberErrorMessage: { control: 'object' },
    setCardNumber: { control: false },
    setCardNumberErrorMessage: { control: false },
  },
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 상태',
  args: {
    cardNumber: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    cardNumberErrorMessage: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
  },
  render: function Render(args) {
    const [cardNumber, setCardNumber] = useState(args.cardNumber);
    return <CardNumber {...args} cardNumber={cardNumber} setCardNumber={setCardNumber} />;
  },
};

export const Valid: Story = {
  name: '유효한 카드 번호 입력',
  args: {
    cardNumber: {
      first: '1234',
      second: '4567',
      third: '8910',
      fourth: '1112',
    },
    cardNumberErrorMessage: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
  },
};

export const Error: Story = {
  name: '유효하지 않은 카드 번호 입력',
  args: {
    cardNumber: {
      first: 'd455',
      second: '4565',
      third: '1234',
      fourth: '5678',
    },
    cardNumberErrorMessage: {
      first: '숫자만 입력 가능합니다.',
      second: '',
      third: '',
      fourth: '',
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
