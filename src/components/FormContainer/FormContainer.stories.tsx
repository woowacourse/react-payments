import type { Meta, StoryObj } from "@storybook/react";
import FormContainer from "./FormContainer";
import { FormContainerProps } from "../../types/componentPropsType";
import useValidation from "../../hooks/useValidation/useValidation";
import useCardInformation from "../../hooks/useCardInformation/useCardInformation";

const meta = {
  title: "MyComponent/MyFormContainer",
  component: FormContainer,
} satisfies Meta<FormContainerProps>;

export default meta;

type Story = StoryObj<FormContainerProps>;

export const Primary: Story = {
  render: () => {
    const { cardInformationState, setCardInformationState } = useCardInformation();
    const { validation } = useValidation();

    return (
      <FormContainer
        cardInformationState={cardInformationState}
        setCardInformationState={setCardInformationState}
        validation={validation}
        step={4}
        complete={false}
        onSubmit={() => {}}
      />
    );
  },
};
