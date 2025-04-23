import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

// 메타데이터 정의
const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "rounded"],
      description: "버튼 모양 (default: 직각, rounded: 둥근 모서리)",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "버튼 크기",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "버튼 너비 100% 여부",
      table: {
        defaultValue: { summary: String(false) },
      },
    },
    fixed: {
      control: { type: "boolean" },
      description: "하단 고정 여부 (fixed position)",
      table: {
        defaultValue: { summary: String(false) },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 상태",
      table: {
        defaultValue: { summary: String(false) },
      },
    },
    onClick: { action: "clicked" },
    children: {
      control: "text",
      description: "버튼 내용",
      defaultValue: "버튼",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "확인",
    variant: "default",
    size: "medium",
    fullWidth: false,
    fixed: false,
    disabled: false,
  },
};

export const Rounded: Story = {
  args: {
    children: "확인",
    variant: "rounded",
    size: "medium",
    fullWidth: false,
    fixed: false,
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    children: "작은 버튼",
    variant: "default",
    size: "small",
    fullWidth: false,
    fixed: false,
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    children: "큰 버튼",
    variant: "default",
    size: "large",
    fullWidth: false,
    fixed: false,
    disabled: false,
  },
};

export const FullWidth: Story = {
  args: {
    children: "전체 너비 버튼",
    variant: "default",
    size: "medium",
    fullWidth: true,
    fixed: false,
    disabled: false,
  },
};

export const Fixed: Story = {
  args: {
    children: "하단 고정 버튼",
    variant: "default",
    size: "medium",
    fullWidth: true,
    fixed: true,
    disabled: false,
  },

  decorators: [
    (Story) => (
      <div style={{ height: "300px", position: "relative" }}>
        <div style={{ padding: "20px" }}>
          <h3>페이지 콘텐츠</h3>
          <p>이 영역은 페이지 콘텐츠입니다. 버튼이 하단에 고정되어 있습니다.</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    children: "비활성화 버튼",
    variant: "default",
    size: "medium",
    fullWidth: false,
    fixed: false,
    disabled: true,
  },
};

export const AddCardButton: Story = {
  args: {
    children: "확인",
    variant: "default",
    size: "large",
    fullWidth: true,
    fixed: true,
    disabled: false,
  },

  decorators: [
    (Story) => (
      <div style={{ width: "300px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};

export const GoBackToAddCard: Story = {
  args: {
    children: "확인",
    variant: "rounded",
    size: "large",
    fullWidth: true,
    fixed: false,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
};
