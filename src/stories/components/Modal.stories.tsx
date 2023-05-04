import { Meta, StoryObj } from "@storybook/react";
import Modal from "../../components/Modal";
import { css } from "styled-components";
import CardCompany from "../../components/CardCompany";
import { CARD_COMPANIES } from "constants/cardCompanies";

const meta = {
  component: Modal,
  title: "Modal/CardCompanyModal",
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const modalStyle = css`
  display: grid;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 28px;
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
  max-width: 480px;
  width: 100%;
  height: 320px;
  padding: 42px 22px 98px;
  border-radius: 5px 5px 0 0;
  background: #fdfdfd;

  animation: modal-show 0.6s;
  overflow: hidden;

  @keyframes modal-show {
    from {
      opacity: 0;
      bottom: -600px;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }
`;

export const CardCompanyModal: Story = {
  args: {
    modalStyle: modalStyle,
    closeButtonName: "나중에 선택할래요",
    children: (
      <>
        {Object.keys(CARD_COMPANIES).map((company) => (
          <CardCompany key={company} cardCompanyName={company} />
        ))}
      </>
    ),
  },

  argTypes: {
    closeButtonName: {
      options: ["나중에 선택할래요", "카드사를 선택했어요"],
      control: {
        type: "radio",
      },
    },
  },
};
