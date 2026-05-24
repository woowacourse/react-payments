import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import CardFormLayout from "./CardFormLayout";

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 32,
  border: "1px solid #acacac",
  borderRadius: 2,
  padding: "8px",
  boxSizing: "border-box",
};

const meta = {
  title: "CardForm/CardFormLayout",
  component: CardFormLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    canSubmit: false,
    onSubmit: fn(),
    status: "idle",
    children: (
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
        <label>
          카드 번호
          <input placeholder="1234 1234 1234 1234" style={inputStyle} />
        </label>
        <label>
          유효기간
          <input placeholder="MM/YY" style={inputStyle} />
        </label>
      </div>
    ),
  },
  render: (args) => (
    <div style={{ width: 376, height: 700, background: "#fff", display: "flex", flexDirection: "column" }}>
      <CardFormLayout {...args} />
    </div>
  ),
} satisfies Meta<typeof CardFormLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CannotSubmit: Story = {};

export const CanSubmit: Story = {
  args: {
    canSubmit: true,
  },
};

export const SubmitClick: Story = {
  args: {
    canSubmit: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "확인" }));
    await expect(args.onSubmit).toHaveBeenCalledOnce();
  },
};
