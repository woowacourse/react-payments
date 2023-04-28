import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

// import { expect } from '@storybook/jest';
import CVCTooltip from '../components/CVCTooltip';

const meta: Meta<typeof CVCTooltip> = {
  title: 'CVCTooltip',
  tags: ['autodocs'],
  component: CVCTooltip,
};

export default meta;
type Story = StoryObj<typeof CVCTooltip>;

// export const check = ()=>{
//   <CVCTool
// }

export const Primary: Story = {
  args: {
    title: 'cvc란?',
    detail: '카드 뒷면의 3자리 숫자입니다.',
  },
};
