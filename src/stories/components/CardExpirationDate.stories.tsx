import type { Meta, StoryObj } from '@storybook/react'
import CardExpirationDate from '../../components/CardExpirationDate'

const meta = {
  title: 'CardExpirationDate',
  component: CardExpirationDate,
} satisfies Meta<typeof CardExpirationDate>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    setCardExpirationDate: () => {},
  },
}
