/* eslint-disable react/function-component-definition */
import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Header from '.';

/**
 * `Header`는 페이지의 제목을 나타낼 때 사용되는 컴포넌트입니다.
 */
const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const CreditCardPageHeader: Story = {
  args: {
    title: '보유 카드',
  },
};

export const RegisterPageHeader: Story = {
  args: {
    title: '카드 추가',
  },
};
