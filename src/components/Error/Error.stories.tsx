import type { Meta, StoryObj } from "@storybook/react";
import Error from "./Error";
import { withCardProviders } from "../../../.storybook/CardProviderDecorator";

const meta = {
  title: "Error",
  component: Error,
  tags: ["autodocs"],
} satisfies Meta<typeof Error>;

export default meta;

type Story = StoryObj<typeof Error>;

export const WithError: Story = {
  args: {
    errorMessage: "숫자만 입력 가능합니다.",
    isVisible: true,
  },
  decorators: [withCardProviders({})],
};
