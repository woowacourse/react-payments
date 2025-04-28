import type { Meta, StoryObj } from "@storybook/react";
import CardExpirationDateInput from "../pages/add-card/payment-input/components/cardInputForm/cardExpirationDateInput/CardExpirationDateInput";
import { expect, userEvent, within } from "@storybook/test";
import styles from "../components/common/inputField/input/Input.module.css";

const meta = {
  title: "Components/CardExpirationDateInput",
  component: CardExpirationDateInput,
  args: {
    handleExpirationDateChange: () => {},
    onSuccessValidate: () => {},
    onSuccessNextInput: () => {},
  },
} satisfies Meta<typeof CardExpirationDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ErrorMonth: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");

    await userEvent.type(monthInput, "숫자");
    expect(monthInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText("숫자를 입력해주세요")).toBeVisible();
  },
};

export const ErrorYear: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");
    const yearInput = canvas.getByPlaceholderText("YY");

    await userEvent.type(monthInput, "가나");
    await userEvent.type(yearInput, "26");

    expect(canvas.getByText("숫자를 입력해주세요")).toBeVisible();
  },
};

export const ErrorDuration: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const monthInput = canvas.getByPlaceholderText("MM");
    const yearInput = canvas.getByPlaceholderText("YY");

    await userEvent.type(monthInput, "04");
    await userEvent.type(yearInput, "20");
    expect(yearInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText("유효기간을 다시 확인해주세요")).toBeVisible();
  },
};
