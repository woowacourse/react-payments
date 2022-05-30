import styled from "styled-components";
import { CARD_TYPES, COMPONENTS } from "../../constants/card";
import { useModalSelector } from "../../hooks/useModalSelector";
import ModalPortal from "../../Portal";

import { Button } from "../common/Button";
import { PageTitle } from "../common/PageTitle";
import { CardPreview } from "./CardPreview";
import { CardNumbersInput } from "./CardNumbersInput";
import { CardExpireDateInput } from "./CardExpireDateInput";
import { CardOwnerInput } from "./CardOwnerInput";
import { CVCInput } from "./CVCInput";
import { CardPasswordInput } from "./CardPasswordInput";
import { CardSelectModal } from "./CardSelectModal";
import { CVCHelperModal } from "./CVCHelperModal";
import useCardInfoContext from "../../hooks/useCardInfoContext";

export const CardRegister = ({ onSubmit }) => {
  const { cardInfo, completeInfo } = useCardInfoContext();

  const [openedModalComponent, openModal, closeModal] = useModalSelector();

  const allCompleted = Object.values(completeInfo).every((check) => check);

  return (
    <>
      <PageTitle>카드 추가</PageTitle>
      <CardPreview
        cardInfo={cardInfo}
        onClickCard={() => openModal(COMPONENTS.CARD_TYPE)}
      />
      <CardNumbersInput openModal={() => openModal(COMPONENTS.CARD_TYPE)} />
      <CardExpireDateInput />
      <CardOwnerInput />
      <CVCInput openModal={() => openModal(COMPONENTS.CVC)} />
      <CardPasswordInput />
      <ModalPortal selected={openedModalComponent} closeModal={closeModal}>
        <CardSelectModal
          name={COMPONENTS.CARD_TYPE}
          cardTypes={CARD_TYPES}
          closeModal={closeModal}
        />
        <CVCHelperModal name={COMPONENTS.CVC} />
      </ModalPortal>

      <Style.ButtonWrapper>
        <Button disabled={allCompleted ? false : true} onClick={onSubmit}>
          다음
        </Button>
      </Style.ButtonWrapper>
    </>
  );
};

const Style = {
  ButtonWrapper: styled.div`
    width: 100%;
    text-align: right;
  `,
};
