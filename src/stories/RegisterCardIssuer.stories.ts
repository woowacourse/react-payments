import { Meta, StoryObj } from '@storybook/react';
import RegisterCardIssuer from '../components/registerSection/RegisterCardIssuer';
import { fn } from '@storybook/test';

const meta: Meta<typeof RegisterCardIssuer> = {
  title: 'RegisterStep/RegisterIssuer',
  component: RegisterCardIssuer,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      description: '카드사 변경 함수',
    },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof RegisterCardIssuer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
