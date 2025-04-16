import type { Meta, StoryObj } from '@storybook/react'
import CardCVCNumber from '../../components/CardCVCNumber'

const meta = {
  title: 'CardCVCNumber',
  component: CardCVCNumber,
} satisfies Meta<typeof CardCVCNumber>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cardCVCNumber: '',
    setCardCVCNumber: () => {},
  },
}
