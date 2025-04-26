import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import FullWidthFixed from "@/layout/FullWidthFixed";

// 메타데이터 정의
const meta = {
  title: "Components/Button",
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
    disabled: false,
  },
};

export const Rounded: Story = {
  args: {
    children: "확인",
    variant: "rounded",
    size: "medium",
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    children: "작은 버튼",
    variant: "default",
    size: "small",
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    children: "큰 버튼",
    variant: "default",
    size: "large",
    disabled: false,
  },
};

export const FullWidthFixedButton: Story = {
  args: {
    children: "전체 너비 버튼",
    variant: "default",
    size: "large",
    disabled: false,
  },
  decorators: [
    (Story) => (
      <FullWidthFixed>
        <Story />
      </FullWidthFixed>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    children: "비활성화 버튼",
    variant: "default",
    size: "medium",
    disabled: true,
  },
};

export const AddCardButton: Story = {
  args: {
    children: "확인",
    variant: "default",
    size: "large",
    disabled: false,
  },

  decorators: [
    (Story) => (
      <FullWidthFixed>
        <Story />
      </FullWidthFixed>
    ),
  ],
};

export const GoBackToAddCard: Story = {
  args: {
    children: "확인",
    variant: "rounded",
    size: "large",
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
