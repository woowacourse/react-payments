import { Meta, StoryObj } from "@storybook/react";
import InputComponent from "../../components/Input";
import { css } from "styled-components";

const meta = {
  component: InputComponent,
  title: "Components/Input",
  tags: ["autodocs"],
} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof InputComponent>;

const Default = css`
  width: 40%;
  border-radius: 8px;
`;

const Large = css`
  width: 100%;
  border-radius: 8px;
`;

const Small = css`
  width: 24%;
  border-radius: 8px;
`;

const ExtraSmall = css`
  width: 12%;
  border-radius: 8px;
`;

export const DefaultInput: Story = {
  args: {
    type: "text",
    inputStyle: Default,
  },

  argTypes: {
    type: {
      options: ["number", "text"],
      control: {
        type: "radio",
      },

      description:
        "number: 숫자만 입력할 수 있는 input<br> text: 영문/한글만 입력할 수 있는 input",
      onClick: { action: "clicked" },
    },

    inputMode: {
      options: ["numeric", "text"],
      control: {
        type: "radio",
      },
    },

    placeholder: {
      options: [
        "0000",
        "MM",
        "YY",
        "카드에 표시된 이름과 동일하게 입력하세요.",
        "000",
        "0",
      ],
      control: {
        type: "select",
      },
    },

    inputStyle: {
      options: [Default, Large, Small, ExtraSmall],
      control: {
        type: "radio",
      },
    },
  },
};

export const LargeInput: Story = {
  args: {
    type: "text",
    placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
    inputStyle: Large,
  },
};

export const SmallInput: Story = {
  args: {
    type: "number",
    inputMode: "numeric",
    placeholder: "MM",
    inputStyle: Small,
  },

  argTypes: {
    placeholder: {
      options: ["MM", "YY"],
      control: {
        type: "radio",
      },
    },
  },
};

export const ExtraSmallInput: Story = {
  args: {
    type: "number",
    inputMode: "numeric",
    placeholder: "0",
    inputStyle: ExtraSmall,
  },
};
