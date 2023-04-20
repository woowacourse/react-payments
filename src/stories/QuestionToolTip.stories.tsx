import QuestionToolTip from '../components/QuestionToolTip';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof QuestionToolTip>;

const meta: Meta<typeof QuestionToolTip> = {
  title: 'QuestionToolTip',
  component: QuestionToolTip,
};

export default meta;

export const Default: Story = { args: { questionMessage: '메세지가 여기에서 보여집니다.' } };
