import type { Meta, StoryObj } from '@storybook/react'
import Label from '../../../components/common/Label'

const meta = {
  title: 'Label',
  component: Label,
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'test',
    children: '라벨입니다.',
  },
}
