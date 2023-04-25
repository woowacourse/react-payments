import { Meta, StoryObj } from '@storybook/react';
import ToolTip from '../../components/common/ToolTip';

const meta: Meta<typeof ToolTip> = {
  component: ToolTip,
  title: 'ToolTip',
};

export default meta;
type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
  args: {
    text: 'CVC번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다',
  },
};
