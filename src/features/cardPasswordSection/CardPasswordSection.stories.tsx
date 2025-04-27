import { Meta, StoryObj } from "@storybook/react";
import CardPasswordSection from "./CardPasswordSection";
import useCardInfo from "../../app/hooks/useCardInfo";
import { INITIALIZE_VALUE } from "../../shared/constants/constant";

const meta = {
  title: "CardPasswordSection",
  component: CardPasswordSection,
} satisfies Meta<typeof CardPasswordSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    password: {
      values: { password: "" },
      changeValues: (type, password) => {
        console.log(type, password);
      },
    },
  },
  render: () => {
    const password = useCardInfo({
      password: INITIALIZE_VALUE,
    });
    return <CardPasswordSection password={password} />;
  },
};
