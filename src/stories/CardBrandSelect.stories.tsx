import type { Meta, StoryObj } from "@storybook/react";
import CardBrandSelect from "../pages/add-card/payment-input/components/cardInputForm/cardBrandSelect/CardBrandSelect";
import { userEvent, within, expect } from "@storybook/test";

const meta = {
  title: "Components/CardBrandSelect",
  component: CardBrandSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof CardBrandSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleBrandNameChange: (brand) => {},
    onSuccessValidate: (isValid) => {},
    onSuccessNextInput: () => {},
  },
};

export const SelectBrand: Story = {
  args: {
    handleBrandNameChange: (brand) => {},
    onSuccessValidate: (isValid) => {},
    onSuccessNextInput: () => {},
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");

    await userEvent.click(button);

    const firstOption = await canvas.getAllByRole("listitem")[0];
    await userEvent.click(firstOption);

    await expect(button).toHaveTextContent(firstOption.textContent ?? "");
  },
};
