import { Meta, StoryObj } from '@storybook/react';
import Caption from './Caption';
import { CARD_META_INFO } from '../../constants/card-app';

const meta = {
  title: 'Caption',
  component: Caption,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    type: {
      control: 'radio',
      options: ['input', 'error'],
    },
  },
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: CARD_META_INFO.cardNumbers.caption!,
    type: 'input',
  },
};
