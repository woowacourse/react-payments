import type { Meta, StoryObj } from "@storybook/react";
import CardTypeDropdown from "./CardTypeDropdown";
import useControlledCardType from "../hooks/useControlledCardType";
import { userEvent, expect } from "@storybook/test";
import { CARD_TYPE_LIST } from "../constants";

const meta = {
  title: "Card/CardTypeDropdown",
  component: CardTypeDropdown,
  args: {
    cardType: null,
    handleCardTypeChange: () => {},
  },
} satisfies Meta<typeof CardTypeDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDynamicTest: Story = {
  render: () => {
    const { cardType, handleCardTypeChange } = useControlledCardType();

    return (
      <CardTypeDropdown
        cardType={cardType}
        handleCardTypeChange={handleCardTypeChange}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const dropdownButton = canvasElement.querySelector(
      'button[role="dropdown-button"]'
    ) as HTMLButtonElement;
    await userEvent.click(dropdownButton);

    const dropdownItems = canvasElement.querySelectorAll(
      'li[role="dropdown-item"]'
    ) as NodeListOf<HTMLLIElement>;
    await userEvent.click(dropdownItems[0]);
    expect(dropdownButton.textContent).toBe(CARD_TYPE_LIST[0]);
  },
};
