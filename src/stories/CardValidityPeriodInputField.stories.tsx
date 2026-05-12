import type { Meta, StoryObj } from "@storybook/react-vite";

import useFormWrapper from "@hooks/useFormWrapper";
import CardValidityPeriodInputField from "../components/feature/CardInfoFormSection/components/CardValidityPeriodInputField";
import { INITIAL_CARD_INFO_FORM_STATE } from "../components/feature/CardInfoFormSection/formState";

const meta = {
  title: "CardValidityPeriodInputField",
  component: CardValidityPeriodInputField,
  decorators: [
    (Story) => {
      const { FormWrapper } = useFormWrapper({
        defaultValues: INITIAL_CARD_INFO_FORM_STATE,
      });
      return (
        <FormWrapper>
          <Story />
        </FormWrapper>
      );
    },
  ],
} satisfies Meta<typeof CardValidityPeriodInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};
