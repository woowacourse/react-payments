import CardPreview from "component/CardPreview/CardPreview.component";

export default {
  title: "CardPreview",
  component: CardPreview,
};

const Template = (args) => <CardPreview {...args} />;

export const DefaultCardPreview = Template.bind({});
DefaultCardPreview.args = {
  cardDatum: {
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
    month: "11",
    year: "12",
    userName: "우연",
  },
  idx: 0,
};
