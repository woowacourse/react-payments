import type { Meta, StoryObj } from "@storybook/react";
import CardExpirationDateInput from "../pages/add-card/components/paymentInputPage/cardInputForm/cardInput/CardExpirationDateInput";
import { expect, userEvent, within } from "@storybook/test";
import styles from "../components/common/inputForm/input/Input.module.css";

const meta = {
  title: "CardExpirationDateInput",
  component: CardExpirationDateInput,
  args: {
    setExpirationDate: () => {},
  },
} satisfies Meta<typeof CardExpirationDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ErrorMonth: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText("MM");

    await userEvent.type(firstInput, "숫자");
    expect(firstInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText("숫자만 입력 가능합니다.")).toBeVisible();
  },
};

export const ErrorYear: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText("MM");
    const secondInput = canvas.getByPlaceholderText("YY");

    await userEvent.type(firstInput, "04");
    await userEvent.type(secondInput, "숫자");
    expect(secondInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText("숫자만 입력 가능합니다.")).toBeVisible();
  },
};

export const ErrorDuration: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByPlaceholderText("MM");
    const secondInput = canvas.getByPlaceholderText("YY");

    await userEvent.type(firstInput, "04");
    await userEvent.type(secondInput, "20");
    expect(secondInput.className).toContain(styles.isNotValid);

    expect(
      canvas.getByText("유효하지 않은 카드입니다. 유효 기간을 확인해주세요.")
    ).toBeVisible();
  },
};
