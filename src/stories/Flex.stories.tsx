import type { Meta, StoryObj } from '@storybook/react-vite';
import Flex from '../components/Common/Flex';

const meta = {
  title: 'Common/Flex',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ color = '#4CAF50', label }: { color?: string; label: string }) => (
  <div
    style={{
      width: 60,
      height: 60,
      backgroundColor: color,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 12,
      fontWeight: 600,
    }}
  >
    {label}
  </div>
);

export const Row: Story = {
  args: { direction: 'row', gap: 10 },
  render: (args) => (
    <Flex {...args}>
      <Box label="A" />
      <Box label="B" color="#2196F3" />
      <Box label="C" color="#FF5722" />
    </Flex>
  ),
};

export const Column: Story = {
  args: { direction: 'column', gap: 10 },
  render: (args) => (
    <Flex {...args}>
      <Box label="A" />
      <Box label="B" color="#2196F3" />
      <Box label="C" color="#FF5722" />
    </Flex>
  ),
};

export const JustifyCenter: Story = {
  args: { direction: 'row', justifyContent: 'center', gap: 10 },
  render: (args) => (
    <Flex {...args} style={{ width: '100%', border: '1px dashed #ccc', padding: 8 }}>
      <Box label="A" />
      <Box label="B" color="#2196F3" />
    </Flex>
  ),
};

export const JustifySpaceBetween: Story = {
  args: { direction: 'row', justifyContent: 'space-between' },
  render: (args) => (
    <Flex {...args} style={{ width: '100%', border: '1px dashed #ccc', padding: 8 }}>
      <Box label="A" />
      <Box label="B" color="#2196F3" />
      <Box label="C" color="#FF5722" />
    </Flex>
  ),
};

export const WithLargeGap: Story = {
  args: { direction: 'row', gap: 32 },
  render: (args) => (
    <Flex {...args}>
      <Box label="A" />
      <Box label="B" color="#2196F3" />
      <Box label="C" color="#FF5722" />
    </Flex>
  ),
};
