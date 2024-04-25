import type { Meta, StoryObj } from "@storybook/react";
import CardWithContext from "./CardWithContext";

const component = CardWithContext.CardNumberInput;

const meta: Meta<typeof component> = {
  component,
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
    cardNumbersError: {
      description: "카드 에러에 대한 정보",
    },
    cardPeriodError: {
      description: "카드 유효기간에 대한 정보",
    },
    cardOwnerError: {
      description: "카드 소유자에 대한 정보",
    },
  },
};

export default meta;
type Story = StoryObj<typeof component>;

const errorDefault: ErrorType = {
  isError: false,
  errorMessage: "",
};

const defaultArgs = {
  cardNumbersValue: { firstNumbers: "0000", secondNumbers: "1234", thirdNumbers: "1234", fourthNumbers: "1234" },
  cardPeriodValue: {
    month: "12",
    year: "12",
  },
  cardOwnerValue: { name: "PARK JEONG WOO" },
  cardNumbersError: {
    firstNumbers: errorDefault,
    secondNumbers: errorDefault,
    thirdNumbers: errorDefault,
    fourthNumbers: errorDefault,
  },
  cardPeriodError: {
    month: errorDefault,
    year: errorDefault,
  },
  cardOwnerError: { name: errorDefault },
};

export const Default: Story = {
  name: "기본적인 FormNumbersInput",
  args: defaultArgs,
};

export const NumberError: Story = {
  name: "에러 발생시 input의 border 색상 변경",
  args: (() => {
    const temp = JSON.parse(JSON.stringify(defaultArgs));
    temp.cardNumbersError = {
      firstNumbers: { isError: true, errorMessage: "숫자 에러 발생" },
      secondNumbers: errorDefault,
      thirdNumbers: errorDefault,
      fourthNumbers: errorDefault,
    };
    return temp;
  })(),
};
