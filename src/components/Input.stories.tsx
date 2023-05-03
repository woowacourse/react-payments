import { Meta, StoryObj } from "@storybook/react";
import InputComponent from "./Input";
import { css } from "styled-components";

const meta = {
  component: InputComponent,
  title: "Components/Input",
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

export const Input: Story = {
  args: {
    type: "number",
    inputMode: "numeric",
    placeholder: "0000",
    inputStyle: Default,
  },

  argTypes: {
    type: {
      options: ["number", "text"],
      control: {
        type: "radio",
      },
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
      options: [Large, Small, ExtraSmall],
      control: {
        type: "radio",
      },
    },
  },
};
