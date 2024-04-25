import type { Meta, StoryObj } from "@storybook/react";

import CreditCard from "./";
import {
  CardNumbersContext,
  CardOwnerInfoContext,
  CardValidityPeriodContext,
} from "../../routes/Payments/CardInfoContextProvider";
import { useState } from "react";

interface Props {
  cardNumbersValue: CardNumbers;
  cardPeriodValue: CardValidityPeriod;
  cardOwnerValue: CardOwnerInfo;
}

const CardWithContext: React.FC<Props> = ({ cardNumbersValue, cardPeriodValue, cardOwnerValue }) => {
  return (
    <CardNumbersContext.Provider value={useState(cardNumbersValue)}>
      <CardValidityPeriodContext.Provider value={useState(cardPeriodValue)}>
        <CardOwnerInfoContext.Provider value={useState(cardOwnerValue)}>
          <CreditCard />
        </CardOwnerInfoContext.Provider>
      </CardValidityPeriodContext.Provider>
    </CardNumbersContext.Provider>
  );
};

const meta: Meta<typeof CardWithContext> = {
  component: CardWithContext,
  argTypes: {
    cardNumbersValue: {
      description: "카드 숫자에 대한 정보",
    },
    cardPeriodValue: {
      description: "카드 유호기간에 대한 정보",
    },
    cardOwnerValue: {
      description: "카드 사용자에 대한 정보",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CreditCard>;

const defaultArgs = {
  cardNumbersValue: { firstNumbers: "0000", secondNumbers: "1234", thirdNumbers: "1234", fourthNumbers: "1234" },
  cardPeriodValue: {
    month: 12,
    year: 12,
  },
  cardOwnerValue: { name: "PARK JEONG WOO" },
};

export const Default: Story = {
  name: "기본적인 CardPreview UI",
  args: defaultArgs,
};

export const ShowVisa: Story = {
  name: "4로 시작하는 16자리 숫자를 입력한다면, Visa를 보여준다.",
  args: {
    ...defaultArgs,
    cardNumbersValue: { firstNumbers: "4200", secondNumbers: "1234", thirdNumbers: "1234", fourthNumbers: "1234" },
  },
};

export const ShowMaster: Story = {
  name: "51~54로 시작하는 숫자로 시작하는 16자리 숫자를 입력한다면, Master를 보여준다.",
  args: {
    ...defaultArgs,
    cardNumbersValue: { firstNumbers: "5200", secondNumbers: "1234", thirdNumbers: "1234", fourthNumbers: "1234" },
  },
};

export const ShowNothing1: Story = {
  name: "4혹은 51~54로 시작하지 않으면 아무것도 보여주지 않는다.",
  args: { ...defaultArgs },
};

export const ShowNothing2: Story = {
  name: "16자리가 아니라면 아무것도 보여주지 않는다.",
  args: {
    ...defaultArgs,
    cardNumbersValue: { firstNumbers: "420", secondNumbers: "123", thirdNumbers: "1234", fourthNumbers: "1234" },
  },
};
