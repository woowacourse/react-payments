import { Meta, StoryObj } from '@storybook/react';
import StoryProvider from 'stories/StoryProvider';
import CreditCardNicknameInputForm from './CreditCardNicknameInputForm';

const meta = {
  title: 'CreditCardNicknameInputForm',
  component: CreditCardNicknameInputForm,
  decorators: [
    (Story) => (
      <StoryProvider>
        <Story />
      </StoryProvider>
    ),
  ],
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  },
};
