import type { Meta, StoryObj } from '@storybook/react';
import CardCVCNumber from '../../components/CardCVCNumber/CardCVCNumber';
import { useState } from '@storybook/preview-api';
import { ERROR_MESSAGE } from '../../constants';
import { fn } from '@storybook/test';

export const ActionsData = {
  setCardCVCNumber: fn(),
  setCardCVCNumberErrorMessage: fn(),
};

const meta = {
  title: 'CardCVCNumber',
  component: CardCVCNumber,
  argTypes: {
    cardCVCNumber: { control: false },
    cardCVCNumberErrorMessage: { control: 'object' },
    setCardCVCNumber: { control: false },
    setCardCVCNumberErrorMessage: { control: false },
  },
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof CardCVCNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 상태',
  args: {
    cardCVCNumber: '',
    cardCVCNumberErrorMessage: '',
  },
  render: function Render(args) {
    const [cardCVCNumber, setCardCVCNumber] = useState<string>(args.cardCVCNumber);
    return <CardCVCNumber {...args} cardCVCNumber={cardCVCNumber} setCardCVCNumber={setCardCVCNumber} />;
  },
};

export const Valid: Story = {
  name: '유효한 카드 CVC 번호 입력',
  args: {
    cardCVCNumber: '313',
    cardCVCNumberErrorMessage: '',
  },
};

export const Error: Story = {
  name: '유효하지 않은 카드 CVC 번호 입력',
  args: {
    cardCVCNumber: '12',
    cardCVCNumberErrorMessage: ERROR_MESSAGE.cardCVCNumber.length,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
