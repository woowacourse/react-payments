import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { useState } from 'react';
import { BottomSheet } from './BottomSheet';
import { Button } from './Button';
import { Text } from './Text';

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('닫기'));
    await expect(canvas.getByText('반갑습니다.')).not.toBeVisible();

    await userEvent.click(canvas.getByText('열기'));
    await expect(canvas.getByText('반갑습니다.')).toBeVisible();
  },
};
