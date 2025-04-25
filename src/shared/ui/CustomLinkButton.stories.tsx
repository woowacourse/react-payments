import { Meta, StoryObj } from '@storybook/react';
import CustomLinkButton from './CustomLinkButton';
import { BrowserRouter } from 'react-router';

const meta: Meta<typeof CustomLinkButton> = {
  title: 'Shared/CustomLinkButton',
  component: CustomLinkButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CustomLinkButton>;

export const Default: Story = {
  render: () => {
    return <CustomLinkButton path='/register' />;
  },
};
