import type { Meta, StoryObj } from "@storybook/react";
import FormContainer from "./FormContainer";
import { useState } from "react";

const meta = {
  title: "MyComponent/MyFormContainer",
  component: FormContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof FormContainer>;

export default meta;

type Story = StoryObj<typeof FormContainer>;

export const Primary: Story = {
  args: {
    cardInformationState: { uniqueNumber: ["", "", "", ""], expirationDate: ["", ""], cvcNumber: [""] },
    setCardInformationState: () => {},
  },
  render: (args: any) => {
    const [cardInformation, setCardInformation] = useState(args.cardInformationState);
    return <FormContainer cardInformationState={cardInformation} setCardInformationState={setCardInformation} />;
  },
};
