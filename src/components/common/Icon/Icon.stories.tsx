import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  component: Icon,
  title: 'Section/Icon',
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconStory: Story = {
  args: {
    imgSrc: '/assets/hd_card.svg',
    name: '현대카드',
  },
};
