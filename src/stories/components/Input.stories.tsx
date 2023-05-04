import { Meta, StoryObj } from "@storybook/react";
import InputComponent from "../../components/Input";
import { css } from "styled-components";

const Large = css`
  width: 100%;
  border-radius: 8px;
`;

const Medium = css`
  width: 40%;
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

const meta = {
  component: InputComponent,
  title: "Components/Input",
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["number", "text"],
      control: {
        type: "radio",
      },
      description:
        "number: 숫자만 입력할 수 있는 input<br> text: 영문/한글만 입력할 수 있는 input",
    },

    inputMode: {
      options: ["numeric", "text"],
      control: {
        type: "radio",
      },
      description:
        "numeric: 모바일에서는 숫자만 입력할 수 있는 숫자 키패드가 나온다.<br> text: 일반 텍스트 키패드가 나온다.",
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
      description:
        "값을 입력하기 전, input에 띄워주는 메시지를 수정할 수 있습니다.",
    },

    inputStyle: {
      options: [Large, Medium, Small, ExtraSmall],
      control: {
        type: "radio",
      },
      description:
        "1. Large Size<br> 2. Medium Size<br> 3.Small Size<br> 4. Extra Small Size<br> input 가로 사이즈를 선택할 수 있습니다.",
    },
  },
} satisfies Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof InputComponent>;

export const LargeInput: Story = {
  args: {
    type: "text",
    placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
    inputStyle: Large,
  },
};

export const MediumInput: Story = {
  args: {
    type: "number",
    inputMode: "numeric",
    placeholder: "MM",
    inputStyle: Medium,
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

export const SmallInput: Story = {
  args: {
    type: "number",
    inputMode: "numeric",
    placeholder: "000",
    inputStyle: Small,
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
