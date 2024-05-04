import { Meta, StoryObj } from "@storybook/react";
import CardPasswordForm from "../components/Form/CardPasswordForm";

const meta = {
  title: "CardPasswordForm",
  component: CardPasswordForm,
} satisfies Meta<typeof CardPasswordForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: "비밀번호 앞 2자리",
    inputCount: 1,
    type: "password",
    placeholders: [""],
    onValidation: () => {},
    onFocus: () => {},
  },
};
