import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';
import { BottomSheet } from './BottomSheet';
import { Text } from './Text';

const Button = styled.button`
  padding: 8px;
`;

const meta = {
  title: 'common/BottomSheet',
  component: BottomSheet,
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>열기</Button>
        <BottomSheet open={open} onClose={() => setOpen(false)}>
          <div>
            <Text size="xxlarge">안녕하세요!</Text>
            <Text size="medium" color="secondary">
              반갑습니다.
            </Text>

            <Button onClick={() => setOpen(false)}>
              <Text>닫기</Text>
            </Button>
          </div>
        </BottomSheet>
      </div>
    );
  },
};
