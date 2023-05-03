import { Meta, StoryObj } from "@storybook/react";
import HeaderComponent from "./Header";
import { BrowserRouter } from "react-router-dom";

const meta = {
  component: HeaderComponent,
  title: "Components/Header",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
  args: {
    navigator: true,
    title: "카드 추가",
  },

  argTypes: {
    title: {
      options: ["카드 추가", "보유카드"],
      control: {
        type: "radio",
      },
    },
  },
};
