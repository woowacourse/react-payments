import dummyCard from "../../../utils/dummyCard";
import CardPreview from "../../CardPreview/CardPreview";
import SwayingLoader2 from "./SwayingLoader2";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SwayingLoader2> = {
  title: "SwayingLoader2",
  component: SwayingLoader2,
  argTypes: {
    children: {
      description: "로딩 애니메이션이 적용될 컴포넌트 입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwayingLoader2>;

export const Default: Story = {
  render: () => {
    return (
      <SwayingLoader2>
        <CardPreview card={dummyCard} />
      </SwayingLoader2>
    );
  },
};
