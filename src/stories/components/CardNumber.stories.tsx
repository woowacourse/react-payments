import type { Meta, StoryObj } from '@storybook/react'
import CardNumber from '../../components/CardNumber'

const meta = {
  title: 'CardNumber',
  component: CardNumber,
} satisfies Meta<typeof CardNumber>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cardNumber: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    setCardNumber: () => {},
  },
}
