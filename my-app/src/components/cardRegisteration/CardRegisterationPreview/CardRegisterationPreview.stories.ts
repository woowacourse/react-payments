import type { Meta, StoryObj } from "@storybook/react-vite";
import CardRegisterationPreview from "./CardRegisterationPreview";

const meta = {
  title: "Components/CardRegisteration/CardRegisterationPreview",
  component: CardRegisterationPreview,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    cardInfo: { control: "object" },
  },
} satisfies Meta<typeof CardRegisterationPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cardInfo: {
      numbers: [],
      expiry: [],
      cvc: "",
      issuerCode: "",
      password: "",
      network: "",
    },
  },
};

export const Visa: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["12", "26"],
      cvc: "123",
      issuerCode: "",
      password: "",
      network: "visa",
    },
  },
};

export const Master: Story = {
  args: {
    cardInfo: {
      numbers: ["5123", "4567", "8901", "2345"],
      expiry: ["06", "27"],
      cvc: "456",
      issuerCode: "",
      password: "",
      network: "master",
    },
  },
};

export const Shinhan: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["12", "26"],
      cvc: "123",
      issuerCode: "41",
      password: "",
      network: "visa",
    },
  },
};

export const BC: Story = {
  args: {
    cardInfo: {
      numbers: ["5123", "4567", "8901", "2345"],
      expiry: ["06", "27"],
      cvc: "456",
      issuerCode: "31",
      password: "",
      network: "master",
    },
  },
};

export const Hyundai: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["01", "28"],
      cvc: "123",
      issuerCode: "61",
      password: "",
      network: "visa",
    },
  },
};

export const Kakaobank: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["03", "27"],
      cvc: "123",
      issuerCode: "15",
      password: "",
      network: "visa",
    },
  },
};

export const Woori: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["05", "26"],
      cvc: "123",
      issuerCode: "W1",
      password: "",
      network: "visa",
    },
  },
};

export const Lotte: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["07", "25"],
      cvc: "123",
      issuerCode: "71",
      password: "",
      network: "visa",
    },
  },
};

export const Hana: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["09", "26"],
      cvc: "123",
      issuerCode: "21",
      password: "",
      network: "visa",
    },
  },
};

export const Kookmin: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["11", "27"],
      cvc: "123",
      issuerCode: "11",
      password: "",
      network: "visa",
    },
  },
};
