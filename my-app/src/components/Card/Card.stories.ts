import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    cardInfo: { control: "object" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    network: "",
    cardInfo: {
      numbers: [],
      expiry: [],
      cvc: "",
      company: "",
      password: "",
    },
  },
};

export const Visa: Story = {
  args: {
    network: "visa",
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["12", "26"],
      cvc: "123",
      company: "",
      password: "",
    },
  },
};

export const Master: Story = {
  args: {
    network: "master",
    cardInfo: {
      numbers: ["5123", "4567", "8901", "2345"],
      expiry: ["06", "27"],
      cvc: "456",
      company: "",
      password: "",
    },
  },
};

export const Shinhan: Story = {
  args: {
    network: "visa",
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["12", "26"],
      cvc: "123",
      company: "shinhan",
      password: "",
    },
  },
};

export const BC: Story = {
  args: {
    network: "master",
    cardInfo: {
      numbers: ["5123", "4567", "8901", "2345"],
      expiry: ["06", "27"],
      cvc: "456",
      company: "bc",
      password: "",
    },
  },
};

export const Hyundai: Story = {
  args: {
    network: "visa",
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["01", "28"],
      cvc: "123",
      company: "hyundai",
      password: "",
    },
  },
};

export const Kakaobank: Story = {
  args: {
    network: "visa",
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["03", "27"],
      cvc: "123",
      company: "kakaobank",
      password: "",
    },
  },
};

export const Woori: Story = {
  args: {
    network: "visa",
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["05", "26"],
      cvc: "123",
      company: "woori",
      password: "",
    },
  },
};

export const Lotte: Story = {
  args: {
    network: "visa",
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["07", "25"],
      cvc: "123",
      company: "lotte",
      password: "",
    },
  },
};

export const Hana: Story = {
  args: {
    network: "visa",
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["09", "26"],
      cvc: "123",
      company: "hana",
      password: "",
    },
  },
};

export const Kookmin: Story = {
  args: {
    network: "visa",
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["11", "27"],
      cvc: "123",
      company: "kookmin",
      password: "",
    },
  },
};
