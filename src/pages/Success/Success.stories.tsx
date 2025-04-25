import type { Meta, StoryObj } from "@storybook/react";
import { withCardProviders } from "../../../.storybook/CardProviderDecorator";
import { withRouter } from "../../../.storybook/withRouter";
import Success from "./Success";
const meta = {
  title: "Success",
  component: Success,
  tags: ["autodocs"],
} satisfies Meta<typeof Success>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withRouter, withCardProviders({})],
};
