import type { Meta, StoryObj } from "@storybook/react";
import CreditCardFront from ".";

const meta = {
  title: "Payment/CreditCardFront",
  component: CreditCardFront,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "신용카드 정보 컴포넌트",
      },
    },
  },
  argTypes: {
    creditCardNumber: {
      description: "카드 번호 16자리",
    },
    expirationPeriod: {
      description: "카드 유효기간",
    },
    ownerName: {
      description: "카드 소유자 이름",
    },
  },
} satisfies Meta<typeof CreditCardFront>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "신용카드",
      },
    },
  },

  args: {
    creditCardNumber: ["", "", "", ""],
    expirationPeriod: "",
    ownerName: "",
  },
};

export const VisaCard: Story = {
  parameters: {
    docs: {
      description: {
        story: "비자카드",
      },
    },
  },

  args: {
    creditCardNumber: ["4421", "5290", "6582", "1953"],
    expirationPeriod: "12/24",
    ownerName: "DARR",
  },
};

export const MasterCard: Story = {
  parameters: {
    docs: {
      description: {
        story: "마스터카드 컴포넌트",
      },
    },
  },

  args: {
    creditCardNumber: ["5121", "5290", "6582", "1953"],
    expirationPeriod: "12/24",
    ownerName: "DARR",
  },
};

export const NormalCard: Story = {
  parameters: {
    docs: {
      description: {
        story: "일반카드 컴포넌트",
      },
    },
  },

  args: {
    creditCardNumber: ["1921", "5290", "6582", "1953"],
    expirationPeriod: "12/24",
    ownerName: "DARR",
  },
};
