import type { Meta, StoryObj } from "@storybook/react";
import InputBox from "./InputBox";
import { fn } from "@storybook/test";

const meta = {
  title: "Base/Input",
  component: InputBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "공통 Input 컴포넌트",
      },
    },
  },

  argTypes: {
    inputValue: {
      description: "유저 입력값",
    },
    handleChange: {
      description: "유저 입력 핸들러",
    },
    size: {
      description: "사이즈 (small | medium | large)",
    },
    placeholder: {
      description: "placeholder",
    },
    isError: {
      description: "에러 발생 여부",
    },
    id: {
      description: "input 아이디",
    },
    name: {
      description: "식별을 위한 어트리뷰트",
    },
  },

  args: {
    handleChange: fn(),
  },
} satisfies Meta<typeof InputBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Input 컴포넌트",
      },
    },
  },

  args: {
    inputValue: "",
    size: "large",
    placeholder: "",
    isError: false,
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: "Input 컴포넌트 에러 발생 시",
      },
    },
  },

  args: {
    ...Default.args,
    isError: true,
  },
};
