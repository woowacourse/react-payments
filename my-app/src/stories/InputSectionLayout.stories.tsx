import type { Meta, StoryObj } from "@storybook/react-vite";
import InputSectionLayout from "../components/InputSectionLayout";

const inputStyle = {
  width: "100%",
  height: 32,
  border: "1px solid #acacac",
  borderRadius: 2,
  boxSizing: "border-box" as const,
  padding: "8px",
};

const meta = {
  title: "Components/InputSectionLayout",
  component: InputSectionLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <InputSectionLayout {...args}>
        <div style={{ display: "flex", gap: 8 }}>
          <input placeholder="1234" style={inputStyle} />
          <input placeholder="1234" style={inputStyle} />
          <input placeholder="1234" style={inputStyle} />
          <input placeholder="1234" style={inputStyle} />
        </div>
      </InputSectionLayout>
    </div>
  ),
} satisfies Meta<typeof InputSectionLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberForm: Story = {
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    message: "본인 명의의 카드만 결제 가능합니다.",
    tag: "카드 번호",
  },
};

export const CvcForm: Story = {
  args: {
    title: "CVC번호를 입력해 주세요",
    message: "",
    tag: "CVC",
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <InputSectionLayout {...args}>
        <input placeholder="123" style={inputStyle} />
      </InputSectionLayout>
    </div>
  ),
};
