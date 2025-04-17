import type { Meta, StoryObj } from '@storybook/react'
import Title from '../../../components/common/Title'

const meta = {
  title: 'Title',
  component: Title,
  tags: ['autodocs'],
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '제목입니다.',
    description: '설명입니다.',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
}

export const onlyTitle: Story = {
  args: {
    children: '제목만 있습니다.',
  },
}
