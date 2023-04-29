import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../components/Tooltip/Tooptip';

const meta = {
  title: 'Example/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicTooltip: Story = {
  args: {
    designType: 'basic',
    message: '카드 뒷면 서명란에 인쇄된 숫자 끝 3자리를 입력해주세요.',
    width: '100px',
    height: '100px',
  },
};
