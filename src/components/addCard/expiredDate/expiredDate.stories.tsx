import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CardInfoProvider } from "../../../contexts/cardInfo";
import { ExpiredDate } from "./expiredDate";

const meta: Meta<typeof ExpiredDate> = {
  component: ExpiredDate,
  title: "ExpiredDate",
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <Story />
      </CardInfoProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ExpiredDate>;

export const Default: Story = {
  args: {},
};

export const FailedInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const month = canvas.getByRole("month");

    await userEvent.type(month, "31", {
      delay: 100,
    });

    const year = canvas.getByRole("year");

    await userEvent.type(year, "21", {
      delay: 100,
    });

    userEvent.tab();
  },
};

export const SuccessInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const month = canvas.getByRole("month");

    await userEvent.type(month, "3", {
      delay: 100,
    });

    const year = canvas.getByRole("year");

    await userEvent.type(year, "25", {
      delay: 100,
    });

    userEvent.tab();
  },
};
