import type { Meta, StoryObj } from '@storybook/react';
import FooterButton from '../components/common/FooterButton/FooterButton';

/**
 * `FooterButton` 은 메뉴의 최하단에 배치되는, 다음 단계로 이동하기 위한 버튼을 포함하는 컴포넌트입니다.
 */
const meta = {
  component: FooterButton,
  title: 'FooterButton',
} satisfies Meta<typeof FooterButton>;

type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    title: '다음',
  },
};

export const Disabled: Story = {
  args: {
    title: '다음',
    disabled: true,
  },
};

export default meta;
