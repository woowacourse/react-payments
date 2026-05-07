import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "@emotion/styled";
import FormField from "./FormField";

const meta: Meta<typeof FormField> = {
  title: "Components/FormField",
  component: FormField,
};

export default meta;

type Story = StoryObj<typeof FormField>;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
`;

export const CardNumber: Story = {
  args: {
    label: "카드 번호",
  },
  render: (args) => (
    <FormField {...args}>
      <Input placeholder="1234" maxLength={4} />
      <Input placeholder="1234" maxLength={4} />
      <Input placeholder="1234" maxLength={4} />
      <Input placeholder="1234" maxLength={4} />
    </FormField>
  ),
};

export const ExpireNumber: Story = {
  args: {
    label: "유효기간",
  },
  render: (args) => (
    <FormField {...args}>
      <Input placeholder="MM" maxLength={2} />
      <Input placeholder="YY" maxLength={2} />
    </FormField>
  ),
};

export const CVC: Story = {
  args: {
    label: "CVC",
  },
  render: (args) => (
    <FormField {...args}>
      <Input placeholder="123" maxLength={3} />
    </FormField>
  ),
};
