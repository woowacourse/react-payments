import { Meta, Story } from "@storybook/react";

import CardIssuerSelect from "../components/CardIssuerSelect";

export default {
  title: "Components/CardIssuerSelect",
  component: CardIssuerSelect,
} as Meta;

const Template: Story = () => <CardIssuerSelect />;

export const Default = Template.bind({});
