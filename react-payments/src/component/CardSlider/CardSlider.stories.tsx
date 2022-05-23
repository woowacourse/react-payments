import CardSlider from "./CardSlider";
import { Meta, Story } from "@storybook/react";

export default {
  title: "CardSlider",
  component: CardSlider,
  decorators: [
    (Story) => (
      <div style={{ width: "375px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <CardSlider {...args} />;

export const DefaultCardSlider = Template.bind({});
