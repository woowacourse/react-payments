import type { Meta, StoryObj } from "@storybook/react-vite";

import useFormWrapper from "../components/common/FormContainer";
import CardNumberInputField from "../components/feature/CardInfoFormSection/components/CardNumberInputField/CardNumberInputField";
import { INITIAL_CARD_INFO_FORM_STATE } from "../components/feature/CardInfoFormSection/formState";

const meta = {
  title: "CardNumberInputField",
  component: CardNumberInputField,
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
  args: {
    onComplete: () => {},
  },
} satisfies Meta<typeof CardNumberInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
