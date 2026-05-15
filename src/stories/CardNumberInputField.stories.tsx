import type { Meta, StoryObj } from "@storybook/react-vite";

import CardNumberInputField from "../components/feature/CardInfoFormSection/components/CardNumberInputField";
import { FormWrapper } from "../components/feature/CardInfoFormSection/formContext";
import { INITIAL_CARD_INFO_FORM_STATE } from "../components/feature/CardInfoFormSection/formState";

const meta = {
  title: "CardNumberInputField",
  component: CardNumberInputField,
  decorators: [
    (Story) => (
      <FormWrapper defaultValues={INITIAL_CARD_INFO_FORM_STATE}>
        <Story />
      </FormWrapper>
    ),
  ],
  args: {
    onComplete: () => {},
  },
} satisfies Meta<typeof CardNumberInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
