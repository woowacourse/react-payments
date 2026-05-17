import type { Meta, StoryObj } from "@storybook/react-vite";

import CardCVCInputField from "../components/feature/CardInfoFormSection/components/CardCVCInputField";
import { FormWrapper } from "../components/feature/CardInfoFormSection/formContext";
import { INITIAL_CARD_INFO_FORM_STATE } from "../components/feature/CardInfoFormSection/formState";

const meta = {
  title: "CardCVCInputField",
  component: CardCVCInputField,
  decorators: [
    (Story) => (
      <FormWrapper defaultValues={INITIAL_CARD_INFO_FORM_STATE}>
        <Story />
      </FormWrapper>
    ),
  ],
} satisfies Meta<typeof CardCVCInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};
