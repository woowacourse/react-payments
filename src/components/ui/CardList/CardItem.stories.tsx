import type { Meta, StoryObj } from '@storybook/react-vite';
import { css } from '@emotion/react';
import CardItem from './CardItem';
import type { Card } from '../../../hooks/useCardListData';

const wrapper = css`
  width: 320px;
`;

const meta = {
  title: 'ui/CardList/CardItem',
  component: CardItem,
  parameters: { layout: 'centered' },
  decorators: [
    (Story: React.ComponentType) => (
      <div css={wrapper}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockCards: Card[] = [
  { id: '1', company: 'bc', number: ['5511', '****', '****', '9012'], expirationDate: ['12', '28'] },
  { id: '2', company: 'shinhan', number: ['4111', '****', '****', '1111'], expirationDate: ['06', '30'] },
  { id: '3', company: 'kakao', number: ['5234', '****', '****', '7890'], expirationDate: ['09', '27'] },
];

export const BCCard: Story = {
  args: { ...mockCards[0], onDeleteCard: () => {} },
};

export const ShinhanCard: Story = {
  args: { ...mockCards[1], onDeleteCard: () => {} },
};

export const KakaoCard: Story = {
  args: { ...mockCards[2], onDeleteCard: () => {} },
};
