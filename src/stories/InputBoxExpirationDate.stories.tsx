import type { Meta, StoryObj } from "@storybook/react";

import InputBoxExpirationDate from "../component/CardInputPage/InputBoxExpirationDate/InputBoxExpirationDate";

type Story = StoryObj<typeof InputBoxExpirationDate>;

const meta: Meta = {
  title: "Expiration Date Input Box",
  component: InputBoxExpirationDate,
  argTypes: {
    setIsComplete: { action: 'Is input complete?' },
  },
};

export default meta;

export const InputTest: Story = {
  args: {
    setPreviewDataHandler: () => {},
  },
};
