import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '../components/Tooltip/Tooltip';
import { QSMark } from '../assets/svgs';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <QSMark />,
    message: '',
  },
};

export const FilledTooltip: Story = {
  args: {
    children: <QSMark />,
    message: 'CVV/CVC 번호는 카드 뒷 면에 있는 3자리 숫자입니다.',
  },
};
