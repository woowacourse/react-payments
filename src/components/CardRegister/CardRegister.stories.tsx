import { BrowserRouter } from 'react-router-dom';

import type { Meta, StoryObj } from '@storybook/react';
import CardRegister from './CardRegister';

const meta = {
  title: 'CardRegister',
  component: CardRegister,
  parameters: {
    docs: {
      description: {
        component: '사용자로부터 카드 정보를 동적으로 받아 등록하는 컴포넌트',
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof CardRegister>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
