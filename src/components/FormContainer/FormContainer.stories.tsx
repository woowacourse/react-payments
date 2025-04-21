import type { Meta, StoryObj } from "@storybook/react";
import FormContainer from "./FormContainer";
import { useState } from "react";
import { FormContainerProps } from "../../types/componentPropsType";

const meta = {
  title: "MyComponent/MyFormContainer",
  component: FormContainer,
  tags: ["autodocs"],
} satisfies Meta<FormContainerProps>;

export default meta;

type Story = StoryObj<FormContainerProps>;

export const Primary: Story = {
  args: {
    cardInformationState: { uniqueNumber: ["", "", "", ""], expirationDate: ["", ""], cvcNumber: [""] },
  },
  render: (args) => {
    const [cardInformation, setCardInformation] = useState(args.cardInformationState);
    return <FormContainer cardInformationState={cardInformation} setCardInformationState={setCardInformation} />;
  },
};
