import CardPreview from "./CardPreview";

export default {
  title: "CardPreview",
  component: CardPreview,
};

const CardTemplate = (args) => <CardPreview {...args} />;

export const SmallCard = CardTemplate.bind({});
SmallCard.args = {
  cardNumber: {
    firstCardNumber: {
      value: "1234",
      keyType: "firstCardNumber",
    },
    secondCardNumber: {
      value: "1234",
      keyType: "firstCardNumber",
    },
    thirdCardNumber: {
      value: "1234",
      keyType: "firstCardNumber",
    },
    fourthCardNumber: {
      value: "1234",
      keyType: "firstCardNumber",
    },
  },
  expireDate: {
    month: {
      value: "12",
      keyType: "month",
    },
    year: {
      value: "22",
      keyType: "month",
    },
  },
  holderName: {
    value: "KKOJAE",
    keyType: "holderName",
  },
  canProceed: true,
  cardCss: {
    width: "213px",
    height: "133px",
    fontSize: "10px",
    cardContainerMarginBottom: "25px",
    cardChipWidth: "40px",
    cardChipHeight: "26px",
    cardNameMargin: "0 0 20px 0",
    cardChipMarginBottom: "15px",
    cardNumberMarginBottom: "12px",
  },
};

export const BigCard = CardTemplate.bind({});
BigCard.args = {
  cardNumber: {
    firstCardNumber: {
      value: "1234",
      keyType: "firstCardNumber",
    },
    secondCardNumber: {
      value: "1234",
      keyType: "firstCardNumber",
    },
    thirdCardNumber: {
      value: "1234",
      keyType: "firstCardNumber",
    },
    fourthCardNumber: {
      value: "1234",
      keyType: "firstCardNumber",
    },
  },
  expireDate: {
    month: {
      value: "12",
      keyType: "month",
    },
    year: {
      value: "22",
      keyType: "month",
    },
  },
  holderName: {
    value: "KKOJAE",
    keyType: "holderName",
  },
  canProceed: true,
  cardCss: {
    width: "293px",
    height: "183px",
    fontSize: "14px",
    cardContainerMarginBottom: "25px",
    cardChipWidth: "55px",
    cardChipHeight: "35px",
    cardNameMargin: "8px 0 30px",
    cardChipMarginBottom: "20px",
    cardNumberMarginBottom: "20px",
  },
};
