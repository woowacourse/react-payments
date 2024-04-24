import type { Meta, StoryObj } from "@storybook/react";
import SelectBox from "./SelectBox";
import { MouseEventHandler, useState } from "react";

const meta = {
  title: "Base/Select",
  component: SelectBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "공통 Select 컴포넌트",
      },
    },
  },
  decorators: [
    (Story, context) => {
      const [isDropdown, setIsDropdown] = useState(false);
      const [selected, setSelected] = useState("");

      const handleDropdown = () => setIsDropdown((prevStat) => !prevStat);
      const handleSelected: MouseEventHandler<HTMLLIElement> = (e) => {
        const { textContent } = e.currentTarget;

        if (!textContent) return;
        setSelected(textContent);
      };

      return (
        <Story args={{ ...context.args, isDropdown, handleDropdown, selected, handleSelected }} />
      );
    },
  ],

  argTypes: {
    isDropdown: {
      description: "현재 드롭다운 옵션이 열려있는지 여부",
    },
    handleDropdown: {
      description: "드롭다운 여부를 설정하는 핸들러",
    },
    selected: {
      description: "현재 선택된 값",
    },
    handleSelected: {
      description: "현재 선택된 값 설정하는 핸들러",
    },
    optionsContents: {
      description: "카드사",
    },
    placeholder: {
      description: "placeholder",
    },
  },
} satisfies Meta<typeof SelectBox>;

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
    selected: "",
    handleSelected: () => {},
    isDropdown: false,
    handleDropdown: () => {},
    optionsContents: [
      "BC카드",
      "신한카드",
      "카카오뱅크",
      "현대카드",
      "우리카드",
      "롯데카드",
      "하나카드",
      "국민카드",
    ],
    placeholder: "카드사를 선택해주세요",
  },
};
