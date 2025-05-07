import type { Meta, StoryObj } from "@storybook/react";
import InputField from "../components/common/inputField/InputField";
import Input from "../components/common/inputField/input/Input";
import { expect, within } from "@storybook/test";

const meta = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "InputForm",
    label: "InputForm 테스트",
    description: "InputForm 테스트 입니다.",
    children: (
      <Input
        type="text"
        placeholder="입력하세요"
        maxLength={10}
        onChange={() => {}}
        isValid={true}
      />
    ),
  },
};

export const Error: Story = {
  args: {
    title: "InputForm",
    label: "InputForm 테스트",
    description: "InputForm 테스트 입니다.",
    feedbackMessage: "InputForm 입력값이 잘못 되었습니다.",
    children: (
      <Input
        type="text"
        placeholder="입력하세요"
        maxLength={10}
        onChange={() => {}}
        isValid={false}
      />
    ),
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const message = canvas.getByText("InputForm 입력값이 잘못 되었습니다.");
    await expect(message).toBeVisible();
  },
};
