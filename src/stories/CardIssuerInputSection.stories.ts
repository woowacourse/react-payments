import { Meta, StoryObj } from '@storybook/react';
import CardIssuerInputSection from '@/components/registerSection/CardIssuerInputSection';
import { fn } from '@storybook/test';

const meta: Meta<typeof CardIssuerInputSection> = {
  title: 'RegisterStep/CardIssuerInputSection',
  component: CardIssuerInputSection,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: '카드사 변경 함수',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof CardIssuerInputSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
