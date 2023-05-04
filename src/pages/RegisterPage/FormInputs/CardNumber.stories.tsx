import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../FormInputs/CardNumberInput";
import CardInfoProvider from "components/provider/CardInfoProvider";
import ModalStateProvider from "components/provider/ModalStateProvider";


const meta = {
  component: CardNumberInput,
  title: "Input/CardNumbers",
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <ModalStateProvider>
          <Story />
        </ModalStateProvider>
      </CardInfoProvider>
    ),
  ],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbers: Story = {
  args: {},
};
