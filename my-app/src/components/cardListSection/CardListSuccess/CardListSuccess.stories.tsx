// src/pages/CardListPage/components/CardListSuccess.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CardListSuccess from './CardListSuccess';

const meta = {
  title: 'Pages/CardListPage/CardListSuccess',
  component: CardListSuccess,
} satisfies Meta<typeof CardListSuccess>;

export default meta;

type Story = StoryObj<typeof meta>;

// 가짜 카드들
const mockCards = [
  {
    id: 'uuid-1',
    issuerCode: '41', 
    number: '123456******7890', // 16자리
    expirationDate: '12/25',
  },
  {
    id: 'uuid-2',
    issuerCode: '61',
    number: '371234*****1234', // 15자리
    expirationDate: '08/28',
  },
  {
    id: 'uuid-3',
    issuerCode: 'W1',
    number: '361234****1234', // 14자리
    expirationDate: '01/29',
  },
];

export const Default: Story = {
  args: {
    cards: mockCards,
    onClick: () => console.log('+ 카드 추가 버튼 클릭됨! (페이지 이동)'),
    onDelete: (id: string) => console.log(`[삭제 액션] 카드 ID: ${id} 삭제 버튼 클릭됨!`),
  },
};
