// CardInfoInput.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "@emotion/styled";
import CardInfoInput from "./CardInfoInput";

const meta: Meta<typeof CardInfoInput> = {
  title: "Components/CardInfoInput",
  component: CardInfoInput,
};

export default meta;

type Story = StoryObj<typeof CardInfoInput>;

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
    inputTitle: "카드 번호",
  },
  render: (args) => (
    <CardInfoInput {...args}>
      <Input placeholder="1234" maxLength={4} />
      <Input placeholder="1234" maxLength={4} />
      <Input placeholder="1234" maxLength={4} />
      <Input placeholder="1234" maxLength={4} />
    </CardInfoInput>
  ),
};

export const ExpireNumber: Story = {
  args: {
    inputTitle: "유효기간",
  },
  render: (args) => (
    <CardInfoInput {...args}>
      <Input placeholder="MM" maxLength={2} />
      <Input placeholder="YY" maxLength={2} />
    </CardInfoInput>
  ),
};

export const CVC: Story = {
  args: {
    inputTitle: "CVC",
  },
  render: (args) => (
    <CardInfoInput {...args}>
      <Input placeholder="123" maxLength={3} />
    </CardInfoInput>
  ),
};
