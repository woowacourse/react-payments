import { Meta, StoryObj } from "@storybook/react";
import InputForm from "../components/common/inputField/InputField";
import { expect, within } from "@storybook/test";

export default {
  title: "InputForm",
  component: InputForm,
} satisfies Meta<typeof InputForm>;

type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
  args: {
    title: "InputForm",
    label: "InputForm 테스트",
    description: "InputForm 테스트 입니다.",
  },
};

export const Error: Story = {
  args: {
    title: "InputForm",
    label: "InputForm 테스트",
    description: "InputForm 테스트 입니다.",
    feedbackMessage: "InputForm 입력값이 잘못 되었습니다.",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByText("InputForm 입력값이 잘못 되었습니다.");
    await expect(message).toBeVisible();
  },
};
