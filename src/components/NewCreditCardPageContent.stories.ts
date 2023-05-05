import type { Meta, StoryObj } from '@storybook/react';
import { NewCreditCardPageContent } from './NewCreditCardPageContent';

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '400px',
      height: '800px',
    },
  },
};

const meta = {
  title: 'NewCreditCardPageContent',
  component: NewCreditCardPageContent,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: 'Default',
    },
  },
} satisfies Meta<typeof NewCreditCardPageContent>;

export default meta;

type Story = StoryObj<typeof NewCreditCardPageContent>;

export const Content: Story = {};
