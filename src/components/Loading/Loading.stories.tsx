/* eslint-disable react/function-component-definition */
import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Loading from '.';

/**
 * `Loading`는 다양한 데이터가 생성, 수정, 삭제 될 때 보여지는 컴포넌트입니다.
 */
const meta: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const DefaultLoading: Story = {
  args: {
    explanation: '로딩 문구를 입력하세요.',
    delayTime: 1,
    backgroundColor: '#0046FF',
  },
};

export const CardRegisterLoading: Story = {
  args: {
    explanation: '엄카를 등록중입니다.',
    delayTime: 1.5,
    backgroundColor: '#F04651',
  },
};
