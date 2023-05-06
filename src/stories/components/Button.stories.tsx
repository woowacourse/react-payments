import { Meta, StoryObj } from "@storybook/react";
import ButtonComponent, {
  AddButton,
  NextButton as NextButtonStyle,
} from "components/Button";
import { css } from "styled-components";

const closeButtonStyle = css`
  width: 100%;
  padding: 12px 0;
  font-size: 14px;
  border: 1px solid var(--darken-color);
  border-radius: 8px;
  background: transparent;

  &:hover {
    background: #fefefe;
    color: var(--label-color);
    border: 1px solid var(--label-color);
    transform: scale(1.014);
  }

  &:active {
    position: fixed;
    bottom: 26px;
    padding: 14px 0;
  }
`;

const meta = {
  component: ButtonComponent,
  title: "Components/Button",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div id="root">
        <Story />
      </div>
    ),
  ],

  args: {
    disabled: false,
  },

  argTypes: {
    children: {
      description: "버튼명을 변경할 수 있습니다.",
    },

    ButtonStyle: {
      options: {
        "Add Button": AddButton,
        "Next Button": NextButtonStyle,
        "Modal Close Button": closeButtonStyle,
      },
      control: {
        type: "radio",
      },
      description: "버튼 스타일을 변경할 수 있습니다.",
    },

    disabled: {
      control: {
        type: "boolean",
      },
      description:
        "true: 버튼 비활성화 (클릭 불가능) <br>false: 버튼 활성화 (클릭 가능)",
    },
  },
} satisfies Meta<typeof ButtonComponent>;

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const MainAddButton: Story = {
  args: {
    children: "+",
    ButtonStyle: AddButton,
    onClick: () => {},
  },
};

export const NextButton: Story = {
  args: {
    children: "다음",
    disabled: true,
    ButtonStyle: NextButtonStyle,
    onClick: () => {},
  },

  argTypes: {
    children: {
      options: ["다음", "확인"],
      control: {
        type: "radio",
      },
    },
  },
};

export const ModalCloseButton: Story = {
  args: {
    children: "나중에 선택할래요",
    ButtonStyle: closeButtonStyle,
    onClick: () => {},
  },

  argTypes: {
    children: {
      options: {
        Default: "나중에 선택할래요",
        "After Selecting Card Company": "카드사를 선택했어요",
      },
      control: {
        type: "radio",
      },
    },
  },
};
