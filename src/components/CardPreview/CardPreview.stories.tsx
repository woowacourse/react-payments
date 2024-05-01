import { Meta, StoryObj } from "@storybook/react";

import { useReducer } from "react";
import FormContext from "../../context/card-add-form";

import CardPreview from "./CardPreview";

import {
  cardAddFormReducer,
  initialCardFormState,
} from "../providers/CardAddFormProvider.util";

const meta = {
  title: "CardPreview",
  component: CardPreview,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    cardNumbers: {
      type: "object",
      description: "사용자가 입력한 카드 번호의 각 부분",
    },
    expirationDate: {
      type: "object",
      description: "사용자가 입력한 카드 유효기간",
    },
    ownerName: {
      type: "object",
      description: "사용자가 입력한 카드 소유자 이름",
    },
  },

  args: {
    cardNumbers: Object,
    expirationDate: Object,
    ownerName: Object,
  },

  decorators: [
    (Story, context) => {
      const [formState, dispatch] = useReducer(cardAddFormReducer, {
        ...initialCardFormState,
        cardNumbers: {
          ...initialCardFormState.cardNumbers,
          value: context.args.cardNumbers,
        },
        expirationDate: {
          ...initialCardFormState.expirationDate,
          value: context.args.expirationDate,
        },
        ownerName: {
          ...initialCardFormState.ownerName,
          value: context.args.ownerName,
        },
      });
      return (
        <FormContext.Provider value={{ formState, dispatch }}>
          <Story />
        </FormContext.Provider>
      );
    },
  ],

  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: {
      first: "1111",
      second: "1111",
      third: "1111",
      fourth: "1111",
    },
    expirationDate: {
      mm: "04",
      yy: "27",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: {
      first: "4111",
      second: "1111",
      third: "1111",
      fourth: "1111",
    },
    expirationDate: {
      mm: "04",
      yy: "27",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};

export const Master: Story = {
  args: {
    cardNumbers: {
      first: "5111",
      second: "1111",
      third: "1111",
      fourth: "1111",
    },
    expirationDate: {
      mm: "04",
      yy: "27",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};

export const EnterFirstPartOnly: Story = {
  args: {
    cardNumbers: {
      first: "5111",
      second: "",
      third: "",
      fourth: "",
    },
    expirationDate: {
      mm: "04",
      yy: "27",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};

export const EnterSecondPartOnly: Story = {
  args: {
    cardNumbers: {
      first: "",
      second: "1111",
      third: "",
      fourth: "",
    },
    expirationDate: {
      mm: "04",
      yy: "27",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};

export const EnterThirdPartOnly: Story = {
  args: {
    cardNumbers: {
      first: "",
      second: "",
      third: "1111",
      fourth: "",
    },
    expirationDate: {
      mm: "04",
      yy: "27",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};

export const EnterFourthPartOnly: Story = {
  args: {
    cardNumbers: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    expirationDate: {
      mm: "04",
      yy: "27",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};

export const EnterMonthOnly: Story = {
  args: {
    cardNumbers: {
      first: "5111",
      second: "1111",
      third: "1111",
      fourth: "1111",
    },
    expirationDate: {
      mm: "04",
      yy: "",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};

export const EnterYearOnly: Story = {
  args: {
    cardNumbers: {
      first: "5111",
      second: "1111",
      third: "1111",
      fourth: "1111",
    },
    expirationDate: {
      mm: "",
      yy: "27",
    },
    ownerName: {
      ownerName: "CHOI HYUNWOONG",
    },
  },
};
