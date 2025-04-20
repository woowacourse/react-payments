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
    cardCVCNumberErrorMessage: { control: false },
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
    const [cardCVCNumberErrorMessage, setCardCVCNumberErrorMessage] = useState<string>(args.cardCVCNumberErrorMessage);
    return (
      <CardCVCNumber
        cardCVCNumber={cardCVCNumber}
        setCardCVCNumber={setCardCVCNumber}
        cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
        setCardCVCNumberErrorMessage={setCardCVCNumberErrorMessage}
      />
    );
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
    cardCVCNumber: '우테코',
    cardCVCNumberErrorMessage: ERROR_MESSAGE.onlyNumber,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
