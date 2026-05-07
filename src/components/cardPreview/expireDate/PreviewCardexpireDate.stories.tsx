import type { Meta, StoryObj } from "@storybook/react-vite";
import PreviewCardExpireDate from "./PreviewCardExpireDate";

const meta: Meta<typeof PreviewCardExpireDate> = {
  title: "Components/PreviewCardExpireDate",
  component: PreviewCardExpireDate,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "black" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PreviewCardExpireDate>;

export const Default: Story = {
  args: {
    expireDate: ["11", "11"],
  },
  render: (args) => {
    return <PreviewCardExpireDate {...args}></PreviewCardExpireDate>;
  },
};

export const Non: Story = {
  args: {
    expireDate: ["11", "1"],
  },
  render: (args) => {
    return <PreviewCardExpireDate {...args}></PreviewCardExpireDate>;
  },
};
