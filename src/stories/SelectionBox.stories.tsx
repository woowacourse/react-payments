import type { Meta, StoryObj } from "@storybook/react";
import SelectBox from "../components/common/SelectBox";
import { CARD_ISSUER } from "../constants/cardIssuer";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "SelectBox",
  component: SelectBox,
  decorators: [
    (Story, context) => {
      const [selected, setSelected] = useState("카드사를 선택해주세요");

      return <Story args={{ ...context.args, selected, setSelected }} />;
    },
  ],
  args: {
    setSelected: fn(),
  },
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: CARD_ISSUER,
    selected: "",
    placeholder: "카드사를 선택해주세요",
  },
};
