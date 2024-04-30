import { StoryFn } from "@storybook/react";
import CardFrontPreview from "./CardFrontPreview";

export default {
  title: "CardPreview/CardFrontPreview",
  component: CardFrontPreview,
};

const Template: StoryFn<typeof CardFrontPreview> = (args) => (
  <CardFrontPreview {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cardNumbers: ["", "", "", ""],
  cardCompanyName: "",
  date: { month: "", year: "" },
  ownerName: "",
};

export const MasterCard = Template.bind({});
MasterCard.args = {
  ...Default.args,
  cardNumbers: ["5412", "1234", "1234", "1234"],
  date: { month: "12", year: "34" },
  ownerName: "PARAN",
};

export const VisaCard = Template.bind({});
VisaCard.args = {
  ...Default.args,
  cardNumbers: ["4312", "1234", "1234", "1234"],
  date: { month: "12", year: "34" },
  ownerName: "PARAN",
};

export const WooriCard = Template.bind({});
WooriCard.args = {
  ...Default.args,
  cardNumbers: ["1234", "1234", "1234", "1234"],
  cardCompanyName: "우리카드",
  date: { month: "12", year: "34" },
  ownerName: "PARAN",
};
