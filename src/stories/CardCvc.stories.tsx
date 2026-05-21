import type { Meta, StoryObj } from '@storybook/react-vite';

import CardCvc from '../components/CardCvc';
import { useCardCvc } from '../hooks/useCardCvc';
import { createCvcHandlers, emptyCvc, filledCvc } from './cardStoryFixtures';

const meta = {
  title: 'Components/CardCvc',
  component: CardCvc,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardCvc>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCvc: emptyCvc,
    setCardCvc: createCvcHandlers(),
  },
};

export const Filled: Story = {
  args: {
    cardCvc: filledCvc,
    setCardCvc: createCvcHandlers(),
  },
};

export const NotNumberError: Story = {
  args: {
    cardCvc: {
      cardCvc: '1a',
      cardCvcErrorMode: 'notNumber',
    },
    setCardCvc: createCvcHandlers(),
  },
};

export const CvcCountError: Story = {
  args: {
    cardCvc: {
      cardCvc: '12',
      cardCvcErrorMode: 'cvcCount',
    },
    setCardCvc: createCvcHandlers(),
  },
};

export const Interactive: Story = {
  args: {
    cardCvc: emptyCvc,
    setCardCvc: createCvcHandlers(),
  },
  render: () => {
    const { cardCvc, cvcHandler: setCardCvc } = useCardCvc();

    return (
      <div>
        <CardCvc cardCvc={cardCvc} setCardCvc={setCardCvc} />

        <div style={{ marginTop: '16px' }}>입력값: {cardCvc.cardCvc}</div>
      </div>
    );
  },
};
