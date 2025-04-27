import { Meta, StoryObj } from "@storybook/react";
import CardTypeSection from "../ui/CardTypeSection";
import useCardInfo from "../../../app/hooks/useCardInfo";
import { INITIALIZE_VALUE } from "../../../shared/constants/constant";

const meta = {
  title: "CardTypeSection",
  component: CardTypeSection,
} satisfies Meta<typeof CardTypeSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardType: {
      values: { cardType: "" },
      changeValues: (type, cardType) => {
        console.log(type, cardType);
      },
    },
  },
  render: () => {
    const cardType = useCardInfo({
      cardType: INITIALIZE_VALUE,
    });
    return <CardTypeSection cardType={cardType} />;
  },
};
