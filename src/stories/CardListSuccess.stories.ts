import CardListSuccess from "@/components/CardList/CardListSuccess";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "CardList/CardListSuccess",
  component: CardListSuccess,
  args: {
    cards: [
      {
        id: "card-1",
        issuerCode: "41",
        number: "551112******9012",
        expirationDate: "12/28",
      },
      {
        id: "card-2",
        issuerCode: "61",
        number: "371234*****1234",
        expirationDate: "03/29",
      },
      {
        id: "card-3",
        issuerCode: "W1",
        number: "361234****1234",
        expirationDate: "08/30",
      },
    ],
    onAddCard: () => {},
    onDeleteCard: () => {},
  },
} satisfies Meta<typeof CardListSuccess>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onDeleteCard: () => {},
  },
};
