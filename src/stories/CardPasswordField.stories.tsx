import type { Meta, StoryObj } from "@storybook/react-vite";

import CardPasswordField from "../components/feature/CardInfoFormSection/components/CardPasswordField";
import { FormWrapper } from "../components/feature/CardInfoFormSection/formContext";
import { INITIAL_CARD_INFO_FORM_STATE } from "../components/feature/CardInfoFormSection/formState";

const meta = {
  title: "CardPasswordField",
  component: CardPasswordField,
  decorators: [
    (Story) => (
      <FormWrapper defaultValues={INITIAL_CARD_INFO_FORM_STATE}>
        <Story />
      </FormWrapper>
    ),
  ],
} satisfies Meta<typeof CardPasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};
