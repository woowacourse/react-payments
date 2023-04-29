import type { Meta, StoryObj } from '@storybook/react';
import CardNameChangeForm from '../../components/CardNameChangeForm/CardNameChangeForm';
import { CardListProvider } from '../../contexts/CardListContext';

const meta = {
  title: 'Payments/Cards/CardNameChangeForm',
  component: CardNameChangeForm,
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    defaultCardName: {
      control: { type: 'text', maxLength: 20 },
    },
  },
  decorators: [
    (Story) => (
      <CardListProvider>
        <Story />
      </CardListProvider>
    ),
  ],
} satisfies Meta<typeof CardNameChangeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    defaultCardName: '카드 1',
  },
};
