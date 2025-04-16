import type { Meta, StoryObj } from "@storybook/react";

import CardExpireDateInputs from "./CardExpireDateInputs";
import { INITIAL_EXPIRE_DATE_STATE } from "../../constants";

import { userEvent, expect, within } from "@storybook/test";
import useControlledExpireDate from "../../hooks/useControlledExpireDate";

const meta = {
  title: "Component/CardExpireDateInputs",
  component: CardExpireDateInputs,
  args: {
    expireDate: INITIAL_EXPIRE_DATE_STATE,
    handleExpireYearChange: () => {},
    handleExpireMonthBlur: () => {},
    handleExpireMonthChange: () => {},
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpireDateInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    expireDate: {
      ...INITIAL_EXPIRE_DATE_STATE,
      MM: { value: "13", errorMessage: "1 ~ 12월까지만 입력 가능합니다.`" },
    },
  },
};

export const WithValidationTest: Story = {
  render: () => {
    const {
      expireDate,
      handleExpireYearChange,
      handleExpireMonthChange,
      handleExpireMonthBlur,
    } = useControlledExpireDate();

    return (
      <CardExpireDateInputs
        expireDate={expireDate}
        handleExpireYearChange={handleExpireYearChange}
        handleExpireMonthChange={handleExpireMonthChange}
        handleExpireMonthBlur={handleExpireMonthBlur}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM") as HTMLInputElement;
    await userEvent.type(monthInput, "1");
    const yearInput = canvas.getByPlaceholderText("YY") as HTMLInputElement;
    await userEvent.type(yearInput, "2");

    const errorMessageEl = canvasElement.querySelector(
      "#year-error-message"
    ) as HTMLSpanElement;

    expect(errorMessageEl.textContent).toBe("년도는 2자리만 입력 가능합니다.");
  },
};
