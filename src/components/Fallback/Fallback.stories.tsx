import type { Meta, StoryObj } from "@storybook/react";
import Fallback from "./Fallback";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Components/Fallback",
  component: Fallback,
  args: {
    message: "뭔가 잘못 누르셨나봐요!",
    buttonText: "홈으로 이동",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Fallback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
