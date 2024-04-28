import { Meta, StoryObj } from "@storybook/react";
import CardCVCForm from "../components/Form/CardCVCForm";

const meta = {
  title: "CardCVCForm",
  component: CardCVCForm,
} satisfies Meta<typeof CardCVCForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: "CVC",
    inputCount: 1,
    type: "text",
    placeholders: ["123"],
    onValidation: () => {},
    onFocus: () => {},
    setFocusedField: () => {},
  },
};
