import type { Meta, StoryObj } from '@storybook/react-vite';

import Input from '../../../../../common/components/Input/Input';
import FieldSection from './FieldSection';

const meta = {
  title: 'feature/CardRegister/components/FieldSection',
  component: FieldSection,
  tags: ['autodocs'],
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    description: '본인 명의의 카드만 결제 가능합니다.',
    children: <Input value="" placeholder="1234" readOnly />,
  },
} satisfies Meta<typeof FieldSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDescription: Story = {};

export const WithoutDescription: Story = {
  args: {
    title: 'CVC 번호를 입력해 주세요',
    description: undefined,
    children: <Input value="" placeholder="123" readOnly />,
  },
};
