import type { Meta, StoryObj } from "@storybook/react";
import CardCompanySelectModal from "../component/CardInputPage/CardCompanySelectModal/CardCompanySelectModal";
import { CreditCardProvider } from "../context/CreditCardContext";
import { useState } from "react";

type Story = StoryObj<typeof CardCompanySelectModal>;

const meta: Meta = {
  title: "Card Company Select Modal",
  component: CardCompanySelectModal,

  argTypes: {
    children: {
      table: { disable: true },
    },
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

export const Default: Story = {
  args: {
    open: true,
  },

  argTypes: {
    setOpen: {
      action: 'Closing modal',
      description: 'This is for setting isOpen state to false.'
    },
    companyClickHandler: {
      action: 'Company clicked',
    }
  },
};

const ExampleComponent = () => {
  const [open, setOpen] = useState(false);
  const [company, setCompany] = useState('없음');

  return (
    <>
      <h1>현재 선택한 카드사: {company}</h1>
      <button 
        type="button"
        onClick={() => setOpen(true)}
        style={{ border: "1px solid black", marginTop: "10px" }}
      >
        <h2>카드사 고르기</h2>
      </button>
      <CardCompanySelectModal 
        open={open}
        setOpen={setOpen}
        companyClickHandler={(value) => {
          setCompany(value);
          setOpen(false);
        }}
      />
    </>
  );
}

export const Example: Story = { render: ExampleComponent };
