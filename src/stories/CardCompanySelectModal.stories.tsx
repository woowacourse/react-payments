import type { Meta, StoryObj } from "@storybook/react";
import CardCompanySelectModal from "../component/CardInputPage/CardCompanySelectModal/CardCompanySelectModal";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof CardCompanySelectModal>;

const meta: Meta = {
  title: "Card Company Select Modal",
  component: CardCompanySelectModal,
  argTypes: {
    setIsOpen: {
      action: 'Closing modal',
      description: 'This is for setting isOpen state to false.'
    },
    children: {
      table: { disable: true },
    },
    companyClickHandler: {
      action: 'Company clicked',
    }
  },
  decorators: [
    (Story) => (
      <CreditCardProvider>
        <Story />
      </CreditCardProvider>
    ),
  ],
};

export default meta;

export const Modal: Story = {
  args: {
    isOpen: true,
  }
};
