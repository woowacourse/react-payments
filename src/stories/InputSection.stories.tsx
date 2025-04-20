import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import InputSection from "../components/common/InputSection/InputSection";
import InputField from "../components/common/InputField/InputField";

const meta = {
  title: "InputSection",
  component: InputSection,
} satisfies Meta<typeof InputSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Input Section Title",
    description: "Input Section Description",
    subtitle: "Input Section Subtitle",
    children: (
      <>
        <InputField value="1234" onChange={fn()} placeholder="0000" />
        <InputField value="1234" onChange={fn()} placeholder="0000" />
        <InputField value="1234" onChange={fn()} placeholder="0000" />
        <InputField value="1234" onChange={fn()} placeholder="0000" />
      </>
    ),
  },
};
