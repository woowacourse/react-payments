import type { Meta, StoryObj } from "@storybook/react-vite";

import useFormWrapper from "../components/common/FormContainer";
import CardCVCInputField from "../components/feature/CardInfoFormSection/components/CardCVCInputField";
import { INITIAL_CARD_INFO_FORM_STATE } from "../components/feature/CardInfoFormSection/formState";

const meta = {
  title: "CardCVCInputField",
  component: CardCVCInputField,
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
} satisfies Meta<typeof CardCVCInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {},
};
