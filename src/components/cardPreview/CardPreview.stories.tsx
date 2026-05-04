import type { Meta, StoryObj } from "@storybook/react-vite";
import CardPreview from "./CardPreview";

const meta: Meta<typeof CardPreview> = {
  title: "Components/CardPreview",
  component: CardPreview,
};

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardNumber: ["1234", "1234", "1234", "1234"],
    expireDate: { month: "11", year: "11" },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ["4123", "1234", "1234", "1234"],
    expireDate: { month: "11", year: "11" },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const MasterCard51: Story = {
  args: {
    cardNumber: ["5123", "1234", "1234", "1234"],
    expireDate: { month: "11", year: "11" },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const MasterCard52: Story = {
  args: {
    cardNumber: ["5223", "1234", "1234", "1234"],
    expireDate: { month: "11", year: "11" },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const MasterCard53: Story = {
  args: {
    cardNumber: ["5323", "1234", "1234", "1234"],
    expireDate: { month: "11", year: "11" },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const MasterCard54: Story = {
  args: {
    cardNumber: ["5423", "1234", "1234", "1234"],
    expireDate: { month: "11", year: "11" },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const MasterCard55: Story = {
  args: {
    cardNumber: ["5523", "1234", "1234", "1234"],
    expireDate: { month: "11", year: "11" },
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};
