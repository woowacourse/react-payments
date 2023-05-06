import type { Meta, StoryObj } from '@storybook/react';
import CardSpinner from '../components/common/CardSpinner/CardSpinner';

/**
 * `CardSpinner` 는 카드 등록이 진행 중인 동안, 로딩 창을 표시하기 위한 스피너 컴포넌트입니다.
 */
const meta = {
  title: 'CardSpinner',
  component: CardSpinner,
} satisfies Meta<typeof CardSpinner>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {},
};

export default meta;
