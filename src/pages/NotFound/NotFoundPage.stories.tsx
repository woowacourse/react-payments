import NotFoundPage from './NotFoundPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '잘못된 경로로 접속을 했을때, 없는 페이지에 접근했을 때 표현되는 404 에러 페이지입니다.',
      },
    },
  },
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    initialEntries: [
      {
        state: {},
      },
    ],
  },
};
