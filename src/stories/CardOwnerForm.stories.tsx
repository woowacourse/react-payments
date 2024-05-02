import { Meta, StoryObj } from "@storybook/react";
import CardOwnerForm from "../components/Form/CardOwnerForm";

const meta = {
  title: "CardOwnerForm",
  component: CardOwnerForm,
} satisfies Meta<typeof CardOwnerForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: "소유자 이름",
    inputCount: 1,
    type: "text",
    placeholders: ["JOHN DOE"],
    onValidation: () => {},
    onFocus: () => {},
  },
};
