import { Meta, StoryFn, StoryObj } from "@storybook/react";

import FormSubmitButton from "../../components/payment/CardEnrollForm/FormSubmitButton";

const Decorator = (Story: StoryFn) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Story />
    </div>
  );
};

const meta: Meta<typeof FormSubmitButton> = {
  component: FormSubmitButton,
  decorators: [Decorator],
};
export default meta;

type Story = StoryObj<typeof FormSubmitButton>;

export const Default: Story = {
  args: {
    onClick: () => alert("clicked!"),
  },
};
