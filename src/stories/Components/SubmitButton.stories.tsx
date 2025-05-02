import { Meta, StoryObj } from '@storybook/react';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof SubmitButton> = {
  title: 'Components/SubmitButton',
  component: SubmitButton,
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
        component: '카드 등록 폼을 모두 작성한 뒤, 제출하는 버튼입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

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
