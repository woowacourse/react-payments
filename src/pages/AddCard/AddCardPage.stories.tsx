import type { Meta, StoryObj } from '@storybook/react';
import AddCardPage from './AddCardPage';
import { BrowserRouter } from 'react-router';

const meta = {
  title: 'Pages/AddCardPage',
  component: AddCardPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '카드 추가 페이지 컴포넌트입니다. 카드 미리보기와 카드 정보 입력 폼을 포함합니다.',
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
} satisfies Meta<typeof AddCardPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 모바일 화면',
};
