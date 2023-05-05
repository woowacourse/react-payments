import type { Meta, StoryObj } from '@storybook/react';
import { HashRouter } from 'react-router-dom';
import BackButton from '../components/common/BackButton/BackButton';

/**
 * `BackButton` 는 사용자에게 뒤로가기, 메인 페이지로 돌아가기 등의 옵션을 제공하기 위한 버튼입니다.
 * 사용자를 특정 페이지로 이동시키기 위한 목적이 있으므로 이동할 주소를 필수적으로 명시하여야 합니다.
 */
const meta = {
  title: 'BackButton',
  component: BackButton,
  decorators: [
    Story => (
      <HashRouter>
        <Story>돌아가기</Story>
      </HashRouter>
    ),
  ],
} satisfies Meta<typeof BackButton>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: { children: '돌아가기', href: 'https://github.com/' },
};

export default meta;
