import type { Meta, StoryObj } from "@storybook/react";
import CardCompanySelectModal from "../component/CardInputPage/CardCompanySelectModal/CardCompanySelectModal";

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
      <div style={{ width: '375px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Modal: Story = {
  args: {
    isOpen: true,
  }
};
