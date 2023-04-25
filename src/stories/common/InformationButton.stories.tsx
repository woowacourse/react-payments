import { Meta, StoryObj } from '@storybook/react';
import InformationButton from '../../components/common/InformationButton';

const meta: Meta<typeof InformationButton> = {
  component: InformationButton,
  title: 'InformationButton',
};

export default meta;
type Story = StoryObj<typeof InformationButton>;

export const QuestionMark: Story = {
  args: {
    text: '?',
  },
};

export const ExclamationMark: Story = {
  args: {
    text: '!',
  },
};
