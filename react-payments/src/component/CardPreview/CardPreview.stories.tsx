import CardPreview, {
  CardPreviewProps,
} from "component/CardPreview/CardPreview.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "CardPreview",
  component: CardPreview,
} as Meta;

const Template: Story<CardPreviewProps> = (args) => <CardPreview {...args} />;

export const DefaultCardPreview = Template.bind({});
DefaultCardPreview.args = {
  cardDatum: {
    id: "0",
    attributes: {
      cardName: "우연 카드",
      cardNumber: {
        first: "1112",
        fourth: "3142",
        second: "3213",
        third: "2321",
      },
      cardTypeInfo: {
        cardType: "branCard",
        cardName: "브랜 카드",
      },
      cardPassword: {
        first: "1",
        second: "2",
      },
      securityCode: "123",
      month: "11",
      year: "12",
      userName: "우연",
    },
  },
};
