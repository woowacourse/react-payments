import type { Meta, StoryObj } from '@storybook/react'
import Input from '../../../components/common/Input'

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '1234',
    maxLength: 2,
    isError: false,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
}

export const Valid: Story = {
  args: {
    placeholder: '1234',
    value: '1234',
    maxLength: 2,
    isError: false,
  },
}

export const Error: Story = {
  args: {
    placeholder: '1234',
    value: '우테코',
    maxLength: 2,
    isError: true,
  },
}
