import { Meta, StoryObj } from '@storybook/react';
import CardLabel from '../components/@common/CardLabel';

const meta = {
  component: CardLabel,
  title: 'Item/CardLabel',
} satisfies Meta<typeof CardLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardLabelStory: Story = {
  args: {
    labelText: '카드 추가',
    color: '',
  },
};
