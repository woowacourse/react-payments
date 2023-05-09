import dummyCard from "../../../utils/dummyCard";
import CardPreview from "../../CardPreview/CardPreview";
import SwayingLoader from "./SwayingLoader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SwayingLoader> = {
  title: "SwayingLoader",
  component: SwayingLoader,
  argTypes: {
    children: {
      description: "로딩 애니메이션이 적용될 컴포넌트 입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwayingLoader>;

export const Default: Story = {
  render: () => {
    return (
      <SwayingLoader>
        <CardPreview card={dummyCard} />
      </SwayingLoader>
    );
  },
};
