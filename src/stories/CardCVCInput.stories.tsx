import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import CardCVCInput from "../pages/add-card/payment-input/components/cardInputForm/cardCVCInput/CardCVCInput";
import styles from "../components/common/inputField/input/Input.module.css";

const meta = {
  title: "Components/CardCVCInput",
  component: CardCVCInput,
  tags: ["autodocs"],
  args: {
    onSuccessValidate: () => {},
    onSuccessNextInput: () => {},
  },
} satisfies Meta<typeof CardCVCInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ErrorState: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("123");

    await userEvent.type(input, "abc");
    expect(input.className).toContain(styles.isNotValid);

    await expect(canvas.getByText("숫자를 입력해주세요")).toBeVisible();
  },
};
