import { Meta, StoryObj } from "@storybook/react";
import HeaderComponent from "../../components/Header";
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
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const CardRegisterHeader: Story = {
  args: {
    navigator: true,
    title: "카드 추가",
  },
};

export const MainHeader: Story = {
  args: {
    navigator: false,
    title: "보유카드",
  },
};

