import type { Meta, StoryObj } from '@storybook/react-vite';

import { SymbolInfo } from './SymbolInfo';

import { Button } from '@/core/components/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SymbolInfo',
  component: SymbolInfo,
} satisfies Meta<typeof SymbolInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Symbol: Story = {
  args: {
    symbol: 'complete',
    children: '제목 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, assumenda voluptatum!',
    action: <Button>button</Button>,
  },
};

export const Info: Story = {
  args: {
    symbol: 'info',
    children: '제목 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, assumenda voluptatum!',
    // description: '설명 Lorem ipsum dolor sit,'
    action: <Button>button</Button>,
  },
};

export const GhostCard: Story = {
  args: {
    symbol: 'ghostCard',
    children: '제목 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, assumenda voluptatum!',
    // description: '설명 Lorem ipsum dolor sit,'
    action: <Button>button</Button>,
  },
};

export const Description: Story = {
  args: {
    symbol: 'complete',
    children: '제목 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, assumenda voluptatum!',
    description: '설명 Lorem ipsum dolor sit,',
    action: <Button>button</Button>,
  },
};

export const Full: Story = {
  args: {
    full: true,
    symbol: 'complete',
    children: '제목 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, assumenda voluptatum!',
    action: <Button>button</Button>,
  },
};
