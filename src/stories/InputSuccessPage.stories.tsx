import { Meta, StoryObj } from "@storybook/react"
import InputSuccessPage from "../component/InputSuccessPage/InputSuccessPage"
import { BrowserRouter } from "react-router-dom"
import { getDefaultCreditCard } from "../type/CreditCard";

type Story = StoryObj<typeof InputSuccessPage>

const meta: Meta = {
  title: "Card Input Success Page",
  component: InputSuccessPage,
  argTypes: {
    setCardInfo: { action: '닉네임 등록!' },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

export const Page: Story = {
  args: {
    card: {
      ...getDefaultCreditCard(),
      name: 'CHAMSAE',
      date: '01/24',
      number: ['1234', '2345', '3456', '4567'],
    },
  },
};
