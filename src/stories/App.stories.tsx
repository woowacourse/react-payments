import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';

const meta = {
  title: 'Pages/Payment',
  component: App,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '카드 결제 정보를 입력받는 메인 페이지입니다. 카드 번호, CVC, 유효기간을 입력받고 실시간으로 카드 미리보기를 제공합니다.',
      },
    },
  },
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '기본 결제 페이지',
  parameters: {
    docs: {
      description: {
        story: '초기 상태의 결제 페이지입니다. 모든 입력 필드가 비어있는 상태입니다.',
      },
    },
  },
};
