import { Meta, StoryObj } from '@storybook/react';
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof ConfirmButton> = {
  title: 'Components/ConfirmButton',
  component: ConfirmButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '카드 등록 완료 후, "확인"을 누르면 카드 등록 페이지로 이동하는 버튼입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmButton>;

export const Enabled: Story = {
  args: {
    disabled: false,
    children: '확인',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '확인',
  },
};
