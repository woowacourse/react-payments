import type { Meta } from "@storybook/react";

// import CardCoModal from "../../component/common/CardCoModal";
import Modal from "@chsua/bottom-modal";

import CardCoButton from "../../component/common/CardCoButton";
import { CARD_CO_NAME } from "../../constant/message";
import { CardCo } from "../../type";

const meta: Meta = {
  title: "CardCoModal component",
  component: Modal,
  argTypes: {
    isOpen: {
      action: "카드사 상태 변경 및 카드사 입력 완료로 상태 변경",
    },
  },
};

const cardCoList = Object.keys(CARD_CO_NAME) as CardCo[];

export const iconModalTest = (args: any) => (
  <Modal {...args}>
    {cardCoList.map((cardCo) => (
      <CardCoButton
        key={cardCo}
        cardCo={cardCo}
        changeCardCoStatus={() => {}}
      />
    ))}
  </Modal>
);
iconModalTest.args = {
  isOpen: true,
  style: {
    height: "250px",
    inner: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      padding: "50px 10%",
      minWidth: "375px",
      rowGap: "20px",
    },
  },
};

export default meta;
