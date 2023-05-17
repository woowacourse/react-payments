import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { CardInfoProvider } from "../../../contexts/cardInfo";
import { CardNumber } from "./cardNumber";

const meta: Meta<typeof CardNumber> = {
  component: CardNumber,
  title: "CardNumber",
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <Story />
      </CardInfoProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CardNumber>;

export const Default: Story = {
  args: {},
};

export const FailedInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fisrtNumber = canvas.getAllByRole("textbox")[0];

    await userEvent.type(fisrtNumber, "1111", {
      delay: 100,
    });

    const secondNumber = canvas.getAllByRole("textbox")[1];

    await userEvent.type(secondNumber, "1111", {
      delay: 100,
    });

    const thirdumber = canvas.getAllByRole("textbox")[2];

    await userEvent.type(thirdumber, "111", {
      delay: 100,
    });

    const fourthNumber = canvas.getAllByRole("textbox")[3];

    await userEvent.type(fourthNumber, "1111", {
      delay: 100,
    });
  },
};

export const SuccessInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fisrtNumber = canvas.getAllByRole("textbox")[0];

    await userEvent.type(fisrtNumber, "1111", {
      delay: 100,
    });

    const secondNumber = canvas.getAllByRole("textbox")[1];

    await userEvent.type(secondNumber, "1111", {
      delay: 100,
    });

    const thirdumber = canvas.getAllByRole("textbox")[2];

    await userEvent.type(thirdumber, "1111", {
      delay: 100,
    });

    const fourthNumber = canvas.getAllByRole("textbox")[3];

    await userEvent.type(fourthNumber, "1111", {
      delay: 100,
    });
  },
};
