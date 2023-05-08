import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { SecurityCode } from "./securityCode";

const meta: Meta<typeof SecurityCode> = {
  component: SecurityCode,
  title: "SecurityCode",
};

export default meta;

type Story = StoryObj<typeof SecurityCode>;

export const Default: Story = {
  args: {},
};

export const FailedInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const code = canvas.getByRole("code");

    await userEvent.type(code, "11", {
      delay: 100,
    });

    userEvent.tab();
  },
};

export const SuccessInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const code = canvas.getByRole("code");

    await userEvent.type(code, "111", {
      delay: 100,
    });

    userEvent.tab();
  },
};
