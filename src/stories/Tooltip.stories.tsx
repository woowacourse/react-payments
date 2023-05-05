import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '../components/common/Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'components/common/Tooltip',
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const TooltipTemplate: Story = {
  render: (args) => {
    return (
      <div style={{ width: '210px' }}>
        <Tooltip {...args} />
      </div>
    );
  },
};

export const CVC: Story = {
  ...TooltipTemplate,
  args: {
    message: '카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리가 CVC 번호입니다.',
  },
};
