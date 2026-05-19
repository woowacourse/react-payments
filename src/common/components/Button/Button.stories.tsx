import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import styled from 'styled-components';

import Button from './Button';

const meta = {
  title: 'common/components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '버튼',
    variant: 'primary',
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '카드 추가하기',
    variant: 'primary',
  },
};

export const Dashed: Story = {
  args: {
    children: '+ 카드 추가',
    variant: 'dashed',
  },
};

export const Disabled: Story = {
  args: {
    children: '등록 중...',
    variant: 'primary',
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <Container>
      <Button variant='primary' onClick={fn()}>
        확인
      </Button>
      <Button variant='dashed' onClick={fn()}>
        + 카드 추가
      </Button>
      <Button variant='primary' disabled onClick={fn()}>
        등록 중...
      </Button>
    </Container>
  ),
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 240px;
`;
