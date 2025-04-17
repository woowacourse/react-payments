import type { Meta, StoryObj } from '@storybook/react'
import CardExpirationDate, { dateType } from '../../components/CardExpirationDate'
import { useState } from 'storybook/internal/preview-api'

const meta = {
  title: 'CardExpirationDate',
  component: CardExpirationDate,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpirationDate>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    cardExpirationDate: {
      month: '',
      year: '',
    },
    setCardExpirationDate: () => {},
    cardExpirationDateErrorMessage: {
      month: '',
      year: '',
    },
    setCardExpirationDateErrorMessage: () => {},
  },
  render: function Render(args) {
    const [cardExpirationDate, setCardExpirationDate] = useState<Record<dateType, string>>({
      month: '',
      year: '',
    })
    const [cardExpirationDateErrorMessage, setCardExpirationDateErrorMessage] = useState<Record<dateType, string>>({
      month: '',
      year: '',
    })
    return (
      <CardExpirationDate
        cardExpirationDate={cardExpirationDate}
        setCardExpirationDate={setCardExpirationDate}
        cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
        setCardExpirationDateErrorMessage={setCardExpirationDateErrorMessage}
      ></CardExpirationDate>
    )
  },
}

export const Valid: Story = {
  args: {
    cardExpirationDate: {
      month: '12',
      year: '25',
    },
    setCardExpirationDate: () => {},
    cardExpirationDateErrorMessage: {
      month: '',
      year: '',
    },
    setCardExpirationDateErrorMessage: () => {},
  },
}

export const Error: Story = {
  args: {
    cardExpirationDate: {
      month: '32',
      year: '21',
    },
    setCardExpirationDate: () => {},
    cardExpirationDateErrorMessage: {
      month: '유효하지 않은 월입니다.',
      year: '유효 기간이 지난 연도입니다.',
    },
    setCardExpirationDateErrorMessage: () => {},
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
}
