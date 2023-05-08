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

    const fisrtNumber = canvas.getByRole("first");

    await userEvent.type(fisrtNumber, "1111", {
      delay: 100,
    });

    const secondNumber = canvas.getByRole("second");

    await userEvent.type(secondNumber, "1111", {
      delay: 100,
    });

    const thirdumber = canvas.getByRole("third");

    await userEvent.type(thirdumber, "111", {
      delay: 100,
    });

    const fourthNumber = canvas.getByRole("fourth");

    await userEvent.type(fourthNumber, "1111", {
      delay: 100,
    });
  },
};

export const SuccessInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const fisrtNumber = canvas.getByRole("first");

    await userEvent.type(fisrtNumber, "1111", {
      delay: 100,
    });

    const secondNumber = canvas.getByRole("second");

    await userEvent.type(secondNumber, "1111", {
      delay: 100,
    });

    const thirdumber = canvas.getByRole("third");

    await userEvent.type(thirdumber, "1111", {
      delay: 100,
    });

    const fourthNumber = canvas.getByRole("fourth");

    await userEvent.type(fourthNumber, "1111", {
      delay: 100,
    });
  },
};
