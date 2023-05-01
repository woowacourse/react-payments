import { Meta, StoryObj } from '@storybook/react';
import CardLabel from './CardLabel';

const meta = {
  component: CardLabel,
  title: 'Section/CardLabel',
} satisfies Meta<typeof CardLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardLabelStory: Story = {
  args: {
    labelText: '카드 추가',
    color: '',
  },
};
